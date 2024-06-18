/*
 * @Author: shiguang
 * @Date: 2024-05-28 16:12:17
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-18 19:55:27
 * @Description: 
 */


import { DecoratorNode, DOMConversionMap, DOMConversionOutput, DOMExportOutput, EditorConfig, LexicalEditor, NodeKey, SerializedLexicalNode } from 'lexical';
import { ProductUIProps } from '../ProductUI';
// import { CUSTOM_NODE_ATTRIBUTE } from '../../../utils/const';
import ProductDecorate from '../ProductDecorate';
const CUSTOM_NODE_ATTRIBUTE = 'data-ckb-editor-custom-config-product';

const ELEMENT_CONTAINER_NAME = 'ckb-editor-element-container-product';
/** 外面包裹的一层dom */
const CONTAINER_DOM = 'div'
/** getType */
const ELEMENT_TYPE = 'product';

export const $isProductNodeByDom = (domNode: HTMLButtonElement) => {
  const options = domNode.getAttribute(CUSTOM_NODE_ATTRIBUTE);
  if (!options) return false;
  const configData = JSON.parse(options);
  if (configData.__elementType !== ELEMENT_TYPE) {
    return false;
  }
  return true;
}

export const $getProductNodeConfigByDom = (domNode: HTMLButtonElement) => {
  if (!$isProductNodeByDom(domNode)) {
    return null;
  }
  const options = domNode.getAttribute(CUSTOM_NODE_ATTRIBUTE)!;
  const configData = JSON.parse(options);
  return configData;
}
function convertProductElement(domNode: HTMLElement): DOMConversionOutput | null {
  const options = domNode.getAttribute(CUSTOM_NODE_ATTRIBUTE);
  if (!options) return null;
  const configData = JSON.parse(options);
  if (configData.__elementType !== ELEMENT_TYPE) {
    return null;
  }
  const node = $createProductNode(JSON.parse(options));
  return { node };
}

/**
 * 当前的节点 lexical 渲染和展示逻辑
 */
export interface ProductNodeOptions extends Pick<ProductUIProps, 'urlList'> {
  // children?: string;
  // url?: string;
  __elementType: typeof ELEMENT_TYPE
}



export class ProductNode extends DecoratorNode<JSX.Element> {
  __options: ProductNodeOptions = {
    __elementType: ELEMENT_TYPE
  }
  constructor(options: Partial<ProductNodeOptions>, key?: NodeKey) {
    super(key);
    this.__options = {
      ...this.__options,
      ...options
    };
  }
  getOptions = () => {
    return this.__options;
  }
  isInline(): boolean {
    return false;
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
          conversion: convertProductElement,
          priority: 2,
        };
      },
    };
  }
  static clone(node: ProductNode): ProductNode {
    return new ProductNode(node.__options, node.__key);
  }
  exportJSON(): SerializedLexicalNode {
    return {
      type: ELEMENT_TYPE,
      version: -0.1,
      config: this.__options
    } as any
  }
  static importJSON(serializedNode: any) {
    const node = $createProductNode(serializedNode.config);
    return node;
  }
  exportDOM(editor: LexicalEditor): DOMExportOutput {
    const element = document.createElement(CONTAINER_DOM);
    element.className = ELEMENT_CONTAINER_NAME
    element.setAttribute(CUSTOM_NODE_ATTRIBUTE, JSON.stringify(this.__options));
    return { element }
  }
  setOptions(options: Partial<ProductNodeOptions>,) {
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
  updateDOM(prevNode: ProductNode, dom: HTMLElement, _config: EditorConfig): boolean {
    // Returning false tells Lexical that this node does not need its
    // DOM element replacing with a new copy from createDOM.
    // super.updateDOM(prevNode, dom, _config)
    dom.setAttribute(CUSTOM_NODE_ATTRIBUTE, JSON.stringify(this.__options))
    return true;
  }
  decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
    return <ProductDecorate nodeKey={this.__key} options={this.__options} />;
  }
}

export const $createProductNode = (options: Partial<ProductNodeOptions>, key?: NodeKey) => {
  return new ProductNode(options, key);
}
