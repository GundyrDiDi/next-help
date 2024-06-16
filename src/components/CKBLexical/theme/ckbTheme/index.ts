/*
 * @Author: shiguang
 * @Date: 2024-05-23 15:09:41
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 10:55:46
 * @Description: 
 */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {EditorThemeClasses} from 'lexical';
import './index.scss';

export const CKBTheme: EditorThemeClasses = {
  autocomplete: 'CKBEditorTheme__autocomplete',
  blockCursor: 'CKBEditorTheme__blockCursor',
  characterLimit: 'CKBEditorTheme__characterLimit',
  code: 'CKBEditorTheme__code',
  codeHighlight: {
    atrule: 'CKBEditorTheme__tokenAttr',
    attr: 'CKBEditorTheme__tokenAttr',
    boolean: 'CKBEditorTheme__tokenProperty',
    builtin: 'CKBEditorTheme__tokenSelector',
    cdata: 'CKBEditorTheme__tokenComment',
    char: 'CKBEditorTheme__tokenSelector',
    class: 'CKBEditorTheme__tokenFunction',
    'class-name': 'CKBEditorTheme__tokenFunction',
    comment: 'CKBEditorTheme__tokenComment',
    constant: 'CKBEditorTheme__tokenProperty',
    deleted: 'CKBEditorTheme__tokenProperty',
    doctype: 'CKBEditorTheme__tokenComment',
    entity: 'CKBEditorTheme__tokenOperator',
    function: 'CKBEditorTheme__tokenFunction',
    important: 'CKBEditorTheme__tokenVariable',
    inserted: 'CKBEditorTheme__tokenSelector',
    keyword: 'CKBEditorTheme__tokenAttr',
    namespace: 'CKBEditorTheme__tokenVariable',
    number: 'CKBEditorTheme__tokenProperty',
    operator: 'CKBEditorTheme__tokenOperator',
    prolog: 'CKBEditorTheme__tokenComment',
    property: 'CKBEditorTheme__tokenProperty',
    punctuation: 'CKBEditorTheme__tokenPunctuation',
    regex: 'CKBEditorTheme__tokenVariable',
    selector: 'CKBEditorTheme__tokenSelector',
    string: 'CKBEditorTheme__tokenSelector',
    symbol: 'CKBEditorTheme__tokenProperty',
    tag: 'CKBEditorTheme__tokenProperty',
    url: 'CKBEditorTheme__tokenOperator',
    variable: 'CKBEditorTheme__tokenVariable',
  },
  embedBlock: {
    base: 'CKBEditorTheme__embedBlock',
    focus: 'CKBEditorTheme__embedBlockFocus',
  },
  hashtag: 'CKBEditorTheme__hashtag',
  heading: {
    h1: 'CKBEditorTheme__h1',
    h2: 'CKBEditorTheme__h2',
    h3: 'CKBEditorTheme__h3',
    h4: 'CKBEditorTheme__h4',
    h5: 'CKBEditorTheme__h5',
    h6: 'CKBEditorTheme__h6',
  },
  image: 'editor-image',
  indent: 'CKBEditorTheme__indent',
  inlineImage: 'inline-editor-image',
  layoutContainer: 'CKBEditorTheme__layoutContainer',
  layoutItem: 'CKBEditorTheme__layoutItem',
  link: 'CKBEditorTheme__link',
  list: {
    checklist: 'CKBEditorTheme__checklist',
    listitem: 'CKBEditorTheme__listItem',
    listitemChecked: 'CKBEditorTheme__listItemChecked',
    listitemUnchecked: 'CKBEditorTheme__listItemUnchecked',
    nested: {
      listitem: 'CKBEditorTheme__nestedListItem',
    },
    olDepth: [
      'CKBEditorTheme__ol1',
      'CKBEditorTheme__ol2',
      'CKBEditorTheme__ol3',
      'CKBEditorTheme__ol4',
      'CKBEditorTheme__ol5',
    ],
    ul: 'CKBEditorTheme__ul',
  },
  ltr: 'CKBEditorTheme__ltr',
  mark: 'CKBEditorTheme__mark',
  markOverlap: 'CKBEditorTheme__markOverlap',
  paragraph: 'CKBEditorTheme__paragraph',
  quote: 'CKBEditorTheme__quote',
  rtl: 'CKBEditorTheme__rtl',
  table: 'CKBEditorTheme__table',
  tableAddColumns: 'CKBEditorTheme__tableAddColumns',
  tableAddRows: 'CKBEditorTheme__tableAddRows',
  tableCell: 'CKBEditorTheme__tableCell',
  tableCellActionButton: 'CKBEditorTheme__tableCellActionButton',
  tableCellActionButtonContainer:
    'CKBEditorTheme__tableCellActionButtonContainer',
  tableCellEditing: 'CKBEditorTheme__tableCellEditing',
  tableCellHeader: 'CKBEditorTheme__tableCellHeader',
  tableCellPrimarySelected: 'CKBEditorTheme__tableCellPrimarySelected',
  tableCellResizer: 'CKBEditorTheme__tableCellResizer',
  tableCellSelected: 'CKBEditorTheme__tableCellSelected',
  tableCellSortedIndicator: 'CKBEditorTheme__tableCellSortedIndicator',
  tableResizeRuler: 'CKBEditorTheme__tableCellResizeRuler',
  tableSelected: 'CKBEditorTheme__tableSelected',
  tableSelection: 'CKBEditorTheme__tableSelection',
  text: {
    bold: 'CKBEditorTheme__textBold',
    code: 'CKBEditorTheme__textCode',
    italic: 'CKBEditorTheme__textItalic',
    strikethrough: 'CKBEditorTheme__textStrikethrough',
    subscript: 'CKBEditorTheme__textSubscript',
    superscript: 'CKBEditorTheme__textSuperscript',
    underline: 'CKBEditorTheme__textUnderline',
    underlineStrikethrough: 'CKBEditorTheme__textUnderlineStrikethrough',
  },
};

export default CKBTheme;
