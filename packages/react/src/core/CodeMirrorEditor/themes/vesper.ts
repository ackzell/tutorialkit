import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

export const vesperTheme = HighlightStyle.define([
  {
    tag: [
      tags.keyword,
      tags.operatorKeyword,
      tags.modifier,
      tags.color,
      tags.constant(tags.name),
      tags.standard(tags.name),
      tags.standard(tags.tagName),
      tags.special(tags.brace),
      tags.atom,
      tags.bool,
      tags.special(tags.variableName),
    ],
    color: '#A0A0A0',
  },
  {
    tag: [tags.controlKeyword, tags.moduleKeyword],
    color: '#A0A0A0',
  },
  {
    tag: [
      tags.name,
      tags.deleted,
      tags.character,
      tags.macroName,
      tags.propertyName,
      tags.variableName,
      tags.labelName,
      tags.definition(tags.name),
    ],
    color: '#FFFFFF',
  },
  { tag: tags.heading, fontWeight: 'bold', color: '#FFC799' },
  {
    tag: [
      tags.typeName,
      tags.className,
      tags.tagName,
      tags.number,
      tags.changed,
      tags.annotation,
      tags.self,
      tags.namespace,
    ],
    color: '#FFC799',
  },
  {
    tag: [tags.function(tags.variableName), tags.function(tags.propertyName)],
    color: '#FFC799',
  },
  { tag: [tags.number], color: '#FFC799' },
  {
    tag: [tags.operator, tags.punctuation, tags.separator, tags.url, tags.escape, tags.regexp],
    color: '#A0A0A0',
  },
  {
    tag: [tags.regexp],
    color: '#A0A0A0',
  },
  {
    tag: [tags.special(tags.string), tags.processingInstruction, tags.string, tags.inserted],
    color: '#99FFE4',
  },
  { tag: [tags.angleBracket], color: '#A0A0A0' },
  { tag: tags.strong, fontWeight: 'bold' },
  { tag: tags.emphasis, fontStyle: 'italic' },
  { tag: tags.strikethrough, textDecoration: 'line-through' },
  { tag: [tags.meta, tags.comment], color: '#8b8b8b94' },
  { tag: tags.link, color: '#FFC799', textDecoration: 'underline' },
  { tag: tags.invalid, color: '#FF8080' },

  // ensure deleted markup is highlighted as deleted (red)
  { tag: [tags.deleted], color: '#FF8080' },
]);
