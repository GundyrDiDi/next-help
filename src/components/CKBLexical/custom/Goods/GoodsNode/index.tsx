/*
 * @Author: shiguang
 * @Date: 2024-05-28 16:12:17
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-16 19:49:57
 * @Description: 
 */


import { DecoratorNode, DOMConversionMap, DOMConversionOutput, DOMExportOutput, EditorConfig, LexicalEditor, LexicalNode, NodeKey, ParagraphNode, SerializedLexicalNode, TextNode } from 'lexical';
import { HTMLAttributeAnchorTarget } from 'react';
import InsertGoodsDecorate from '../GoodsDecorate';

const InsertGoodsNode = () => {
  return <div>

  </div>
}

const GOODS_ATTRIBUTE = 'ckb-goods-json';


function convertGoodsElement(domNode: HTMLElement): DOMConversionOutput | null {
    debugger
    const options = domNode.getAttribute(GOODS_ATTRIBUTE);
    if (options !== null) {
      const node = $createGoodsNode(JSON.parse(options));
      return { node };
    }
    return null;
  }

/**
 * 当前的节点 lexical 渲染和展示逻辑
 */
export interface GoodsNodeOptions{
    text?: string;
    url?: string;
    target?: HTMLAttributeAnchorTarget;
}

const ELEMENT_CONTAINER_NAME = 'ckb-element-container-goods'

export class GoodsNode extends DecoratorNode<JSX.Element> {
    __options: GoodsNodeOptions = {}
    constructor(options: GoodsNodeOptions, key?: NodeKey) {
        super(key);
        this.__options = options;
    }
    static getType() {
        return 'goods'
    }
    static importDOM(): DOMConversionMap | null {
        return {
          span: (domNode: HTMLElement) => {
            if (!domNode.hasAttribute(GOODS_ATTRIBUTE)) {
              return null;
            }
            return {
              conversion: convertGoodsElement,
              priority: 3,
            };
          },
        };
      }
    static clone(node: GoodsNode): GoodsNode {
        return new GoodsNode(node.__options, node.__key);
      }
    exportJSON(): SerializedLexicalNode {
        return {
          type: 'goods',
          version: -0.1,
          config: this.__options,
        } as any
    }
    static importJSON(serializedNode: any) {
      const node = $createGoodsNode(serializedNode.config);
      return node;
    }
    exportDOM(editor: LexicalEditor): DOMExportOutput {
        const element = document.createElement('span');
        element.className =ELEMENT_CONTAINER_NAME
        element.setAttribute(GOODS_ATTRIBUTE, JSON.stringify(this.__options));
        return { element }
    }
    setOptions(text: string) {
        const writable = this.getWritable();
        writable.__options.text = text
    }
    createDOM(): HTMLElement {
        const element = document.createElement('span');
        element.className = ELEMENT_CONTAINER_NAME
        element.setAttribute(GOODS_ATTRIBUTE, JSON.stringify(this.__options));
        return element;
    }
    updateDOM(prevNode: GoodsNode, dom: HTMLElement, _config: EditorConfig): boolean {
        // Returning false tells Lexical that this node does not need its
        // DOM element replacing with a new copy from createDOM.
        // super.updateDOM(prevNode, dom, _config)
        dom.setAttribute(GOODS_ATTRIBUTE, JSON.stringify(this.__options))
        return true;
      }
    decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
        return <InsertGoodsDecorate nodeKey={this.__key} options={this.__options} />;
    }
}

export const $createGoodsNode = (options: GoodsNodeOptions, key?: NodeKey) => {
    return new GoodsNode(options, key);
}

export default InsertGoodsNode