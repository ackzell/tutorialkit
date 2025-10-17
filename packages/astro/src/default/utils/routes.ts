import { execSync } from 'node:child_process';
import type { Lesson } from '@tutorialkit/types';
import type { GetStaticPaths, GetStaticPathsItem } from 'astro';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import { getTutorial } from './content';
import { generateNavigationList } from './nav';

function getGitLastModified(filePath: string): string | null {
  try {
    const timestamp = execSync(`git log -1 --format="%cI" -- "src/content/tutorial/${filePath}"`, {
      encoding: 'utf8',
    }).trim();
    return timestamp || null;
  } catch {
    return null;
  }
}

export async function generateStaticRoutes() {
  const tutorial = await getTutorial();

  for (const lesson of tutorial.lessons) {
    const timestamp = getGitLastModified(lesson.filepath);

    if (timestamp) {
      lesson.data.custom = lesson.data.custom || {};
      lesson.data.custom.lastModified = timestamp;
    }
  }

  const routes = [];
  const lessons = Object.values(tutorial.lessons);

  for (const lesson of lessons) {
    const part = lesson.part && tutorial.parts[lesson.part.id];
    const chapter = lesson.chapter && part?.chapters[lesson.chapter.id];

    const slug = [part?.slug, chapter?.slug, lesson.slug].filter(Boolean).join('/');
    const title = [lesson.part?.title, lesson.chapter?.title, lesson.data.title].filter(Boolean).join(' / ');

    routes.push({
      params: {
        slug: `/${slug}`,
      },
      props: {
        title,
        lesson: lesson as Lesson<AstroComponentFactory>,
        logoLink: tutorial.logoLink,
        navList: generateNavigationList(tutorial, import.meta.env.BASE_URL),
      },
    } satisfies GetStaticPathsItem);
  }

  return routes satisfies ReturnType<GetStaticPaths>;
}
