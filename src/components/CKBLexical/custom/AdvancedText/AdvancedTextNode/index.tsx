/*
 * @Author: shiguang
 * @Date: 2024-06-18 23:55:20
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-19 00:12:41
 * @Description: 
 */
import { DOMConversionMap, DOMConversionOutput, EditorConfig, ElementFormatType, LexicalNode, NodeKey, SerializedLexicalNode, Spread, TextNode } from "lexical";

export type SerializedAdvancedTextNode = Spread<
    {
        format: ElementFormatType;
    },
    SerializedLexicalNode
>;
const CONTAINER_DOM = 'span';

function convertArticleElement(domNode: HTMLElement): DOMConversionOutput | null {
    // const options = domNode.getAttribute(CUSTOM_NODE_ATTRIBUTE);
    // if (!options) return null;
    // const configData = JSON.parse(options);
    // if (configData.__elementType !== ELEMENT_TYPE) {
    //   return null;
    // }
    // const node = $createArticleNode(JSON.parse(options));
    const styleAttr = domNode.getAttribute('style')
    if (styleAttr) domNode.setAttribute('style', styleAttr);

    return { node };
}

export class AdvancedTextNode extends TextNode {
    __color: string;

    constructor(text: string, color: string, key?: NodeKey) {
        super(text, key);
        this.__color = color;
    }

    static getType(): string {
        return 'advancedText';
    }

    static clone(node: AdvancedTextNode): AdvancedTextNode {
        return new AdvancedTextNode(node.__text, node.__color, node.__key);
    }

    static importDOM(): DOMConversionMap | null {
        return {
            [CONTAINER_DOM]: (domNode: HTMLElement) => {
                if (!domNode.hasAttribute('style')) {
                    return null;
                }
                return {
                    conversion: convertArticleElement,
                    priority: 3,
                };
            },
        };
    }



    // exportJSON(): SerializedAdvancedTextNode {
    //     return {
    //         format: this.__format || '',
    //         type: 'decorator-block',
    //         version: 1,
    //     };
    // }

    createDOM(config: EditorConfig): HTMLElement {
        const element = super.createDOM(config);
        element.style.color = this.__color;
        return element;
    }

    // updateDOM(
    //     prevNode: TextNode,
    //     dom: HTMLElement,
    //     config: EditorConfig,
    // ): boolean {
    //     const isUpdated = super.updateDOM(prevNode, dom, config);
    //     if (prevNode.__color !== this.__color) {
    //         dom.style.color = this.__color;
    //     }
    //     return isUpdated;
    // }
}

export function $createColoredNode(text: string, color: string): AdvancedTextNode {
    return new AdvancedTextNode(text, color);
}

export function $isColoredNode(node: LexicalNode | null | undefined): node is AdvancedTextNode {
    return node instanceof AdvancedTextNode;
}