/*
 * @Author: shiguang
 * @Date: 2024-05-23 14:57:07
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-19 01:44:25
 * @Description: 
 */
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { HashtagNode } from "@lexical/hashtag";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { OverflowNode } from "@lexical/overflow";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ImageNode } from "../custom/Image/ImageNode";
import { GoodsNode } from "../custom/Goods/GoodsNode";
import { ButtonNode } from "../custom/Button/ButtonNode";
import { YouTubeNode } from "../custom/Youtube/YouTubeNode";
import { ArticleNode } from "../custom/Article/ArticleNode";
import { ShopNode } from "../custom/Shop/ShopNode";
import { ProductNode } from "../custom/Product/ProductNode";
import { LexicalTableOfContentsNode } from "../custom/LexicalTableOfContents/LexicalTableOfContentsNode";
import { $isTextNode, DOMConversionMap, DOMConversionOutput, LexicalNode, TextFormatType, TextNode } from "lexical";

const customNode = [
   

    GoodsNode,

    ButtonNode,

    YouTubeNode,

    ArticleNode,

    ShopNode,

    ProductNode,

    LexicalTableOfContentsNode
];

const nodeNameToTextFormat: Record<string, TextFormatType> = {
    code: 'code',
    em: 'italic',
    i: 'italic',
    s: 'strikethrough',
    strong: 'bold',
    sub: 'subscript',
    sup: 'superscript',
    u: 'underline',
  };


  const setTextNodeStyleByDomNode = (lexicalNode: LexicalNode, domNode: Node) => {
    if(!lexicalNode || !domNode) return
    const span = domNode as HTMLElement;
    const styleStr = span.getAttribute('style')
    if ($isTextNode(lexicalNode) && styleStr) {
      lexicalNode.setStyle(styleStr)
    }
  }
  
function convertTextFormatElement(domNode: Node): DOMConversionOutput {
    const format = nodeNameToTextFormat[domNode.nodeName.toLowerCase()];
    if (format === undefined) {
      return {node: null};
    }
    return {
      forChild: (lexicalNode) => {
        if ($isTextNode(lexicalNode) && !lexicalNode.hasFormat(format)) {
          lexicalNode.toggleFormat(format);
        }
        setTextNodeStyleByDomNode(lexicalNode, domNode)
        return lexicalNode;
      },
      node: null,
    };
  }
const originTextNodeimportDOMConfig = TextNode.importDOM();


TextNode.importDOM =  (): DOMConversionMap | null  => {
    const { span, ...other } = originTextNodeimportDOMConfig!;
    const dumyNode:any = '';

    const newSpan =  () => ({
        conversion: (domNode: Node) => {
            const res = span(dumyNode)?.conversion?.(domNode as HTMLElement)!;
            return {
                ...res,
                forChild: (lexicalNode: LexicalNode, parentLexicalNode: LexicalNode | null | undefined,) => {
                    if(res.forChild){
                        const lexicaltextNode = res.forChild?.(lexicalNode, parentLexicalNode)
                        setTextNodeStyleByDomNode(lexicaltextNode!, domNode)
                        return lexicaltextNode;
                    }
                    return lexicalNode;
                },

            };
        },
        priority: 0 as const,
      });
    return {
        ...other,
        span: newSpan,
      code: () => ({
        conversion: convertTextFormatElement,
        priority: 0,
      }),
      em: () => ({
        conversion: convertTextFormatElement,
        priority: 0,
      }),
      i: () => ({
        conversion: convertTextFormatElement,
        priority: 0,
      }),
      s: () => ({
        conversion: convertTextFormatElement,
        priority: 0,
      }),
      
      strong: () => ({
        conversion: convertTextFormatElement,
        priority: 0,
      }),
      sub: () => ({
        conversion: convertTextFormatElement,
        priority: 0,
      }),
      sup: () => ({
        conversion: convertTextFormatElement,
        priority: 0,
      }),
      u: () => ({
        conversion: convertTextFormatElement,
        priority: 0,
      }),
    };
  }

export const PlaygroundNodes = [
    TextNode,

    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,

    TableNode,
    TableCellNode,
    TableRowNode,

    HashtagNode,

    AutoLinkNode,
    
    LinkNode,

    OverflowNode,


    ImageNode,

    ...customNode
  
];

