/*
 * @Author: shiguang
 * @Date: 2024-05-23 14:47:05
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 13:45:54
 * @Description: 
 */
'use client'
import './override.scss'
import CKBEditor, { CKBEditorRef } from "../../../../../components/CKBLexical";
// import { htmlmock } from './mock/htmlmock';

import { $generateHtmlFromNodes } from '@lexical/html';
import ArticleUI from "../../../../../components/CKBLexical/custom/Article/ArticleUI";
import ProductUI from "../../../../../components/CKBLexical/custom/Product/ProductUI";
import ShopUI from "../../../../../components/CKBLexical/custom/Shop/ShopUI";
import MultiUrlModal from "../../../../../components/CKBLexical/components/MultiUrlModal";
import { useEffect, useRef } from "react";
import { htmlmock } from "../../../../../components/CKBLexical/mock/htmlmock";
import { htmlmock1 } from "../../../../../components/CKBLexical/mock/htmlmock1";
import { useAtom } from 'jotai';
import { CustomerDetail } from '@/model';
import { atomCustomerDetail } from '@/model/CustomerDetail';

// getActiveEditor
// import CKBEditor from '@sniff/ckb-editor/lib/index';
// import '@sniff/ckb-editor/lib/index.css';

const shopDom = `<p class="CKBEditorTheme__paragraph">
<div class="ckb-editor-element-container-shop" 
data-ckb-editor-custom-config-shop="{&quot;__elementType&quot;:&quot;shop&quot;,&quot;urlList&quot;:[{&quot;url&quot;:&quot;https://wbaibu.1688.com&quot;}]}">
</div>
</p>`

const productDom = `<p class="CKBEditorTheme__paragraph"><div class="ckb-editor-element-container-product" data-ckb-editor-custom-config-product="{&quot;__elementType&quot;:&quot;product&quot;,&quot;urlList&quot;:[{&quot;url&quot;:&quot;42342&quot;}]}"></div></p>`

const link = `<p class="CKBEditorTheme__paragraph" dir="ltr"><a href="http://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">hahah </span></a></p>`


const button = `
<p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><button class="ckb-editor-element-container-button" data-ckb-editor-custom-config-button="{&quot;__elementType&quot;:&quot;button&quot;,&quot;color&quot;:&quot;blue&quot;,&quot;children&quot;:&quot;按钮&quot;,&quot;href&quot;:&quot;https://www.youtube.com/watch?v=Et6Pw0Ru1fM&quot;}"></button></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p>`

const artical = `   
<p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><div class="ckb-editor-element-container-artical" data-ckb-editor-custom-config-article="{&quot;__elementType&quot;:&quot;article&quot;,&quot;url&quot;:&quot;https://help.theckb.com/ja/oem&quot;}"></div></p>
`
const zonghe = `
<h2 class="CKBEditorTheme__h2" dir="ltr"><span style="white-space: pre-wrap;">二级标题</span></h2><p class="CKBEditorTheme__paragraph"><span style="white-space: pre-wrap;">=====</span></p><h3 class="CKBEditorTheme__h3" dir="ltr"><span style="white-space: pre-wrap;">三级标题</span></h3><p class="CKBEditorTheme__paragraph"><span style="white-space: pre-wrap;">=====</span></p><h4 class="CKBEditorTheme__h4" dir="ltr"><span style="white-space: pre-wrap;">四级标题</span></h4><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><s><span class="CKBEditorTheme__textStrikethrough" style="white-space: pre-wrap;">划线</span></s></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">高亮</span></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">链接</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">文章</span></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><div class="ckb-editor-element-container-artical" data-ckb-editor-custom-config-article="{&quot;__elementType&quot;:&quot;article&quot;,&quot;url&quot;:&quot;https://help.theckb.com/ja/oem&quot;}"></div></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">图片</span></p><p class="CKBEditorTheme__paragraph" dir="ltr"><img src="https://test-img-theckb.oss-cn-hangzhou.aliyuncs.com/1718540055901.png" alt="" width="inherit" height="inherit"></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">店铺</span></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><div class="ckb-editor-element-container-shop" data-ckb-editor-custom-config-shop="{&quot;__elementType&quot;:&quot;shop&quot;,&quot;urlList&quot;:[{&quot;url&quot;:&quot;https://wbaibu.1688.com&quot;}]}"></div></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">商品</span></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><div class="ckb-editor-element-container-product" data-ckb-editor-custom-config-product="{&quot;__elementType&quot;:&quot;product&quot;,&quot;urlList&quot;:[{&quot;url&quot;:&quot;2423432&quot;}]}"></div></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">按钮</span></p><p class="CKBEditorTheme__paragraph"><button class="ckb-editor-element-container-button" data-ckb-editor-custom-config-button="{&quot;__elementType&quot;:&quot;button&quot;,&quot;color&quot;:&quot;red&quot;,&quot;children&quot;:&quot;热热舞热舞&quot;}"></button></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><button class="ckb-editor-element-container-button" data-ckb-editor-custom-config-button="{&quot;__elementType&quot;:&quot;button&quot;,&quot;color&quot;:&quot;blue&quot;,&quot;children&quot;:&quot;热热舞热舞&quot;,&quot;href&quot;:&quot;https://www.youtube.com/watch?v=Et6Pw0Ru1fM&quot;,&quot;type&quot;:&quot;primary&quot;}"></button></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">撒花🎉</span></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p>
`

interface EditorViewProps {
    articleTitle?: string;
    initHtml?: string;
}

export default function EditorView(props: EditorViewProps) {
    const { articleTitle, initHtml } = props
    const editorRef = useRef<CKBEditorRef>(null);
    const [_userInfo] = useAtom(atomCustomerDetail);
    const userInfo = _userInfo && Object.keys(_userInfo).length ? _userInfo : undefined
    // const [userInfo] = useAtom(CustomerDetail);

    useEffect(() => {
        // ckb-editor-element-container-shop
        // http://n.media.theckb.com:4000/ja/article/30?env=true
    }, [])

    return (
        <div className="ckb-editor-view-container" >
            <CKBEditor
                articleTitle={articleTitle}
                // isEditable={}
                ref={editorRef}
                bizfields={{
                    userInfo
                }}
                // initHtml={htmlmock}
                initHtml={
                    initHtml
                    // link
                    // button
                    // productDom
                    // artical
                    // zonghe
                }
            />
        </div>
    );
}