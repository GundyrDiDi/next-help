/*
 * @Author: shiguang
 * @Date: 2024-05-28 16:12:17
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-16 20:07:17
 * @Description: 
 */


import { DecoratorNode, DOMConversionMap, DOMConversionOutput, DOMExportOutput, EditorConfig, LexicalEditor, NodeKey, SerializedLexicalNode } from 'lexical';
import ButtonDecorate from '../ButtonDecorate';
import { ButtonUIProps } from '../ButtonUI';
// import InsertButtonDecorate from '../ButtonDecorate';

const InsertButtonNode = () => {
  return <div>

  </div>
}

const BUTTON_ATTRIBUTE = 'data-ckb-editor-custom-config-button';



const ELEMENT_CONTAINER_NAME = 'ckb-editor-element-container-button';
/** 外面包裹的一层dom */
const CONTAINER_DOM = 'button'
/** getType */
const ELEMENT_TYPE = 'button';

export const $isButtonNodeByDom = (domNode: HTMLButtonElement) => {
  const options = domNode.getAttribute(BUTTON_ATTRIBUTE);
  if(!options) return false;
  const configData = JSON.parse(options);
  if(configData.__elementType !== ELEMENT_TYPE){
    return false;
  }
  return true;
}

export const $getButtonNodeConfigByDom = (domNode: HTMLButtonElement) => {
  if(!$isButtonNodeByDom(domNode)){
    return null;
  }
  const options = domNode.getAttribute(BUTTON_ATTRIBUTE)!;
  const configData = JSON.parse(options);
  return configData;
}
function convertButtonElement(domNode: HTMLElement): DOMConversionOutput | null {
    const options = domNode.getAttribute(BUTTON_ATTRIBUTE);
    if(!options) return null;
    const configData = JSON.parse(options);
    if(configData.__elementType !== ELEMENT_TYPE){
      return null;
    }
    const node = $createButtonNode(JSON.parse(options));
    return { node };
  }

/**
 * 当前的节点 lexical 渲染和展示逻辑
 */
export interface ButtonNodeOptions extends Pick<ButtonUIProps, 'color' | 'href' | 'target' | 'type'>{
    children?: string;
    url?: string;
    __elementType: typeof ELEMENT_TYPE
}



export class ButtonNode extends DecoratorNode<JSX.Element> {
    __options: ButtonNodeOptions = {
      __elementType: 'button'
    }
    constructor(options: ButtonNodeOptions, key?: NodeKey) {
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
            if (!domNode.hasAttribute(BUTTON_ATTRIBUTE)) {
              return null;
            }
            return {
              conversion: convertButtonElement,
              priority: 3,
            };
          },
        };
      }
    static clone(node: ButtonNode): ButtonNode {
        return new ButtonNode(node.__options, node.__key);
      }
    exportJSON(): SerializedLexicalNode {
        return {
          type: ELEMENT_TYPE,
          version: -0.1,
          config: this.__options
        } as any
    }
    static importJSON(serializedNode: any) {
      const node = $createButtonNode(serializedNode.config);
      return node;
    }
    exportDOM(editor: LexicalEditor): DOMExportOutput {
        const element = document.createElement(CONTAINER_DOM);
        element.className =ELEMENT_CONTAINER_NAME
        element.setAttribute(BUTTON_ATTRIBUTE, JSON.stringify(this.__options));
        return { element }
    }
    setOptions(options: ButtonNodeOptions,) {
        const writable = this.getWritable();
        writable.__options = {
          ...this.__options,
          ...options
        };
    }
    createDOM(): HTMLElement {
        const element = document.createElement(CONTAINER_DOM);
        element.className = ELEMENT_CONTAINER_NAME
        element.setAttribute(BUTTON_ATTRIBUTE, JSON.stringify(this.__options));
        return element;
    }
    updateDOM(prevNode: ButtonNode, dom: HTMLElement, _config: EditorConfig): boolean {
        // Returning false tells Lexical that this node does not need its
        // DOM element replacing with a new copy from createDOM.
        // super.updateDOM(prevNode, dom, _config)
        dom.setAttribute(BUTTON_ATTRIBUTE, JSON.stringify(this.__options))
        return true;
      }
    decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
        return <ButtonDecorate nodeKey={this.__key} options={this.__options} />;
    }
}

export const $createButtonNode = (options: ButtonNodeOptions, key?: NodeKey) => {
    return new ButtonNode(options, key);
}

export default InsertButtonNode