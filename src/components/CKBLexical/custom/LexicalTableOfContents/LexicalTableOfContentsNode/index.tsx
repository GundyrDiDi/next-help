/*
 * @Author: shiguang
 * @Date: 2024-05-28 16:12:17
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-16 19:26:36
 * @Description: 
 */


import { $getRoot, DecoratorNode, DOMConversionMap, DOMConversionOutput, DOMExportOutput, EditorConfig, LexicalEditor, LexicalNode, NodeKey, SerializedLexicalNode } from 'lexical';
// import LexicalTableOfContentsDecorate from '../LexicalTableOfContentsDecorate';
import LexicalTableOfContentsInClient from '../LexicalTableOfContentsInClient';
import { CUSTOM_NODE_ATTRIBUTE } from '../../../utils/const';
import useLexicalEditable from '@lexical/react/useLexicalEditable';
import { useEffect, useRef, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { HeadingNode } from '@lexical/rich-text';


const ELEMENT_CONTAINER_NAME = 'ckb-editor-element-container-tableOfContents';
/** 外面包裹的一层dom */
const CONTAINER_DOM = 'div'
/** getType */
const ELEMENT_TYPE = 'lexicalTableOfContents';

export const $isLexicalTableOfContentsNodeByDom = (domNode: HTMLButtonElement) => {
  const options = domNode.getAttribute(CUSTOM_NODE_ATTRIBUTE);
  if(!options) return false;
  const configData = JSON.parse(options);
  if(configData.__elementType !== ELEMENT_TYPE){
    return false;
  }
  return true;
}

export const $getLexicalTableOfContentsNodeConfigByDom = (domNode: HTMLButtonElement) => {
  if(!$isLexicalTableOfContentsNodeByDom(domNode)){
    return null;
  }
  const options = domNode.getAttribute(CUSTOM_NODE_ATTRIBUTE)!;
  const configData = JSON.parse(options);
  return configData;
}
function convertLexicalTableOfContentsElement(domNode: HTMLElement): DOMConversionOutput | null {
    const options = domNode.getAttribute(CUSTOM_NODE_ATTRIBUTE);
    if(!options) return null;
    const configData = JSON.parse(options);
    if(configData.__elementType !== ELEMENT_TYPE){
      return null;
    }
    const node = $createLexicalTableOfContentsNode(JSON.parse(options));
    return { node };
  }

/**
 * 当前的节点 lexical 渲染和展示逻辑
 */
export interface LexicalTableOfContentsNodeOptions{
    // children?: string;
    // url?: string;
    __elementType: typeof ELEMENT_TYPE
}



export class LexicalTableOfContentsNode extends DecoratorNode<JSX.Element> {
    __options: LexicalTableOfContentsNodeOptions = {
      __elementType: ELEMENT_TYPE
    }
    constructor(options: Partial<LexicalTableOfContentsNodeOptions>, key?: NodeKey) {
        super(key);
        this.__options = {
          ...this.__options,
          ...options
        };
    }
    getOptions = () => {
      return this.__options;
    }
    static getType() {
        return ELEMENT_TYPE
    }
    static importDOM(): DOMConversionMap | null {
        return {
          [CONTAINER_DOM]: (domNode: HTMLElement) => {
            if (!domNode.hasAttribute(CUSTOM_NODE_ATTRIBUTE)) {
              return null;
            }
            return {
              conversion: convertLexicalTableOfContentsElement,
              priority: 2,
            };
          },
        };
      }
    static clone(node: LexicalTableOfContentsNode): LexicalTableOfContentsNode {
        return new LexicalTableOfContentsNode(node.__options, node.__key);
      }
    exportJSON(): SerializedLexicalNode {
        return {
          type: ELEMENT_TYPE,
          version: -0.1,
          config: this.__options
        } as any
    }
    static importJSON(serializedNode: any) {
      const node = $createLexicalTableOfContentsNode(serializedNode.config);
      return node;
    }
    exportDOM(editor: LexicalEditor): DOMExportOutput {
        const element = document.createElement(CONTAINER_DOM);
        element.className =ELEMENT_CONTAINER_NAME
        element.setAttribute(CUSTOM_NODE_ATTRIBUTE, JSON.stringify(this.__options));
        return { element }
    }
    setOptions(options: Partial<LexicalTableOfContentsNodeOptions>,) {
        const writable = this.getWritable();
        writable.__options = {
          ...this.__options,
          ...options
        };
    }
    createDOM(): HTMLElement {
        const element = document.createElement(CONTAINER_DOM);
        element.className = ELEMENT_CONTAINER_NAME
        element.setAttribute(CUSTOM_NODE_ATTRIBUTE, JSON.stringify(this.__options));
        return element;
    }
    updateDOM(prevNode: LexicalTableOfContentsNode, dom: HTMLElement, _config: EditorConfig): boolean {
        // Returning false tells Lexical that this node does not need its
        // DOM element replacing with a new copy from createDOM.
        // super.updateDOM(prevNode, dom, _config)
        dom.setAttribute(CUSTOM_NODE_ATTRIBUTE, JSON.stringify(this.__options))
        return true;
      }
    decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
        return <LexicalTableOfContentsInClient title="xxtitle" isInArtical />;
    }
}

export const $createLexicalTableOfContentsNode = (options: Partial<LexicalTableOfContentsNodeOptions>, key?: NodeKey) => {
    return new LexicalTableOfContentsNode(options, key);
}


export const useInsertTableOfContentsInArticle = () => {
  const isEditable = useLexicalEditable()
  const isInsertRef = useRef(false)
  const [editor] = useLexicalComposerContext()
  useEffect(() => {
      if(isInsertRef.current || isEditable) return;
      editor.update(() => {
          const deepNode = (node?: LexicalNode | null) => {
            if(isInsertRef.current) return;
              if(!node) return;
              if(node.getType() === 'heading'){
                  const headingNode = node as HeadingNode;
                  if(headingNode.getTag() === 'h2'){
                      headingNode.insertBefore($createLexicalTableOfContentsNode({}))
                      isInsertRef.current = true;
                  }
              }
              const nextSibling = node.getNextSibling()
              deepNode(nextSibling)
          }
          deepNode($getRoot().getFirstChild())
        });
  },[editor, isEditable])
}