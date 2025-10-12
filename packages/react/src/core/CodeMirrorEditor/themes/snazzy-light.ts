import { HighlightStyle } from '@codemirror/language';
import { tags } from '@lezer/highlight';

export const snazzyLightTheme = HighlightStyle.define([
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
    color: '#a2447b',
  },
  {
    tag: [tags.controlKeyword, tags.moduleKeyword],
    color: '#a2447b',
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
    color: '#066C9F',
  },
  { tag: tags.heading, fontWeight: 'bold', color: '#2DAE58' },
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
    color: '#0C7270',
  },
  {
    tag: [tags.function(tags.variableName), tags.function(tags.propertyName)],
    color: '#066C9F',
  },
  { tag: [tags.number], color: '#B1403C' },
  {
    tag: [tags.operator, tags.punctuation, tags.separator, tags.url, tags.escape, tags.regexp],
    color: '#565869',
  },
  {
    tag: [tags.regexp],
    color: '#ADB1C2',
  },
  {
    tag: [tags.special(tags.string), tags.processingInstruction, tags.string, tags.inserted],
    color: '#816100',
  },
  { tag: [tags.angleBracket], color: '#0C7270' },
  { tag: tags.strong, fontWeight: 'bold' },
  { tag: tags.emphasis, fontStyle: 'italic' },
  { tag: tags.strikethrough, textDecoration: 'line-through' },
  { tag: [tags.meta, tags.comment], color: '#ADB1C2' },
  { tag: tags.link, color: '#066C9F', textDecoration: 'underline' },
  { tag: tags.invalid, color: '#066C9F' },

  // ensure deleted markup is highlighted as deleted (blue)
  { tag: [tags.deleted], color: '#9f0606' },
]);
