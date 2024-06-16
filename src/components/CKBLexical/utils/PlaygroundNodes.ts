/*
 * @Author: shiguang
 * @Date: 2024-05-23 14:57:07
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-14 00:59:10
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

const customNode = [
    GoodsNode,

    ButtonNode,

    YouTubeNode,

    ArticleNode,

    ShopNode,

    ProductNode,

    LexicalTableOfContentsNode
]

export const PlaygroundNodes = [
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

