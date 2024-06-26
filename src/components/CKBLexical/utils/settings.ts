/*
 * @Author: shiguang
 * @Date: 2024-05-23 15:25:44
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 11:57:33
 * @Description: 
 */
// const hostName = window.location.hostname;
// export const isDevPlayground: boolean =
//   hostName !== 'playground.lexical.dev' &&
//   hostName !== 'lexical-playground.vercel.app';

export const DEFAULT_SETTINGS = {
  disableBeforeInput: false,
  emptyEditor: false,
  isAutocomplete: false,
  isCharLimit: false,
  isCharLimitUtf8: false,
  isCollab: false,
  isMaxLength: false,
  isRichText: true,
  measureTypingPerf: false,
  shouldUseLexicalContextMenu: false,
  showNestedEditorTreeView: false,
  showTableOfContents: false,
  showTableOfContentsCopy: true,
  showTreeView: true,
  tableCellBackgroundColor: true,
  tableCellMerge: true,
} as const;

interface OtherSetting{
  articleTitle?: string;
  toolbarClassName?: string;
  bizfields?: Record<string, any>;
}

// These are mutated in setupEnv
export const INITIAL_SETTINGS: Record<keyof typeof DEFAULT_SETTINGS, boolean> & OtherSetting = {
  ...DEFAULT_SETTINGS,
};

export type SettingName = keyof typeof DEFAULT_SETTINGS & keyof OtherSetting;

export type Settings = typeof INITIAL_SETTINGS;
