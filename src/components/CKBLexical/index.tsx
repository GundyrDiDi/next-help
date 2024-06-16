/* eslint-disable @next/next/no-img-element */
/*
 * @Author: shiguang
 * @Date: 2024-05-23 14:49:20
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-16 22:28:55
 * @Description: 
 */
'use client'
import './editor.scss'
import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer"
import { PlaygroundNodes } from "./utils/PlaygroundNodes";
import { theme } from "./theme";
import { SharedHistoryContext, useSharedHistoryContext } from "./context/SharedHistoryContext";
import { TableContext } from "./custom/Table/TablePlugin";
import { SettingsContext, useSettings } from "./context/SettingsContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import ToolbarPlugin from './custom/Toolbar/Plugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import ImagesPlugin from './custom/Image/ImagePlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { TableOfContentDataContext } from './components/TableOfContentRender';
import { $getRoot, $insertNodes, LexicalEditor } from 'lexical';
import ExportHtml from './utils/ExportHtml';
import { $generateHtmlFromNodes, $generateNodesFromDOM } from '@lexical/html';
import { ConfigProvider } from 'antd';
import SelectionEditPanelContainer, { SelectionEditPanelContext } from './components/SelectionEditPanelContainer';
import { CAN_USE_DOM } from '@lexical/utils';
import YouTubePlugin from './custom/Youtube/YouTubePlugin';
import LexicalTableOfContentsAdmin from './custom/LexicalTableOfContents/LexicalTableOfContentsAdmin';
import { useInsertTableOfContentsInArticle } from './custom/LexicalTableOfContents/LexicalTableOfContentsNode';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { defaultPrefixCls } from 'antd/es/config-provider';



const getInitNode = (editor: LexicalEditor, initHtml?: string) => {
  if (!CAN_USE_DOM || !initHtml) {
    return undefined
  }
  const parser = new DOMParser();
  const dom = parser.parseFromString(initHtml, 'text/html');
  // const dom = parser.parseFromString(goodshtml, 'text/html');
  $getRoot().select();
  const nodes = $generateNodesFromDOM(editor, dom);
  $insertNodes(nodes);
}


interface CKBEditorProps {
  isEditable?: boolean;
  isDev?: boolean;
  initHtml?: string;
  articleTitle?: string;
}

export interface CKBEditorRef {
  __editor?: LexicalEditor;
  getEditor?: () => LexicalEditor | undefined;
  getHtml?: () => Promise<string | undefined>;
}


const CKBEditor = forwardRef<CKBEditorRef, CKBEditorProps>((props, ref) => {
  CKBEditor.displayName = 'CKBEditor';
  const { isEditable = false, isDev = false, initHtml, articleTitle } = props;
  const editorRef = useRef<CKBEditorRef>(null)
  useImperativeHandle(ref, () => ({
    getEditor: () => editorRef.current?.getEditor?.(),
    getHtml: async () => {
      return await editorRef.current?.getHtml?.()
    },
  }));
  const initialConfig: InitialConfigType = {
    editorState: (editor) => getInitNode(editor, initHtml),
    namespace: 'Playground',
    nodes: [...PlaygroundNodes],
    onError: (error: Error) => {
      throw error;
    },
    theme,
    editable: isEditable
  };

  return (
    <ConfigProvider
      prefixCls='ckb-editor'
      theme={{
        token: {
          colorPrimary: '#000',
          colorPrimaryBg: '#F5F5F5',
          colorPrimaryBgHover: '#F5F5F5',
        },
        components: {
          Dropdown: {

          },
          Menu: {

          },
        }
      }}
      
    >
      <LexicalComposer  initialConfig={initialConfig} >
        <SelectionEditPanelContext>
          <SettingsContext value={{ articleTitle: articleTitle }} >
          <SharedHistoryContext>
            <TableContext>
              <TableOfContentDataContext>
                <Editor isEditable={isEditable} isDev={isDev} ref={editorRef} />
              </TableOfContentDataContext>
            </TableContext>
          </SharedHistoryContext>
          </SettingsContext>
        </SelectionEditPanelContext>
      </LexicalComposer>
    </ConfigProvider>
  )
})

interface EditorProps extends Pick<CKBEditorProps, 'isEditable' | 'isDev'> {
  isEditable?: boolean;
}
const Editor = forwardRef<CKBEditorRef, EditorProps>((props, ref) => {
  Editor.displayName = 'Editor'
  const { isEditable, isDev } = props
  const { historyState } = useSharedHistoryContext();
  const [editor] = useLexicalComposerContext()
  const {
    settings: {
      isCollab,
      isAutocomplete,
      isMaxLength,
      isCharLimit,
      isCharLimitUtf8,
      isRichText,
      showTreeView,
      showTableOfContents,
      shouldUseLexicalContextMenu,
      tableCellMerge,
      tableCellBackgroundColor,
    },
  } = useSettings();
  const placeholder = <div>我是 placeholder https://www.theckb.com/archive/china-ec-220704/</div>;
  useInsertTableOfContentsInArticle();
  // if(ref){
  //   ref.current
  // }
  // ref.current = (
  //   <div className="editor-container">
  //   </div>
  // );
  const xx = useRef<any>({})

  useImperativeHandle(ref, () => ({
    getEditor: () => editor,
    getHtml: () => {
      return new Promise((resolve) => {
        editor.update(() => {
          const res = $generateHtmlFromNodes(editor)
          resolve(res)
        })
      })
    },
  }));
  return (
    <>
      {/* <LexicalTableOfContentsInClient title="xx" /> */}
      <div className="flex relative" >
        {isEditable && <SelectionEditPanelContainer />}
        <div className="!rounded-[8px] bg-[#fff]" >
          {isEditable && <div style={{ display: 'unset' }} className="rounded-[8px]" >
            <div className="sticky top-[0px] z-[2]" >
              <ToolbarPlugin />
            </div>
          </div>}
          <>
            <YouTubePlugin />
            <HistoryPlugin externalHistoryState={historyState} />
            <ImagesPlugin />
            <LinkPlugin />
          </>
          <div className="editor-container flex" >
            <div className="p-[20px] border-r border-[#F0F0F0]" >
              {/* <AutoFocusPlugin/> */}
              {/* <TabFocusPlugin/> */}
              <div className="editor-inner">
                <RichTextPlugin
                  contentEditable={<ContentEditable className="editor-input w-[810px]" />}
                  placeholder={placeholder}
                  ErrorBoundary={LexicalErrorBoundary}
                />
              </div>
              {isDev && <ExportHtml xx={xx.current} />}
            </div>
            {isEditable && <div style={{ display: 'unset' }} >
              <div className="pl-[20px] pr-[10px] bg-white sticky top-[60px] mt-[20px] max-h-[600px] overflow-y-auto" >
                <LexicalTableOfContentsAdmin />
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>

  )

})


export default CKBEditor