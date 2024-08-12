/*
 * @Author: shiguang
 * @Date: 2024-05-23 14:47:05
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-20 12:32:18
 * @Description: 
 */
'use client'
import CKBEditor, { CKBEditorRef } from "../../../../components/CKBLexical";
// import { htmlmock } from './mock/htmlmock';

import { $generateHtmlFromNodes } from '@lexical/html';
import ArticleUI from "../../../../components/CKBLexical/custom/Article/ArticleUI";
import ProductUI from "../../../../components/CKBLexical/custom/Product/ProductUI";
import ShopUI from "../../../../components/CKBLexical/custom/Shop/ShopUI";
import MultiUrlModal from "../../../../components/CKBLexical/components/MultiUrlModal";
import { useRef } from "react";
import { htmlmock } from "../../../../components/CKBLexical/mock/htmlmock";
import { htmlmock1 } from "../../../../components/CKBLexical/mock/htmlmock1";
import { atomCustomerDetail } from "@/model/CustomerDetail";
import { useAtom } from "jotai";

// getActiveEditor
// import CKBEditor from '@sniff/ckb-editor/lib/index';
// import '@sniff/ckb-editor/lib/index.css';
const zonghe1 = `<h2 class="CKBEditorTheme__h2" dir="ltr"><span style="white-space: pre-wrap;">二级标题</span></h2><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><iframe data-lexical-youtube="Et6Pw0Ru1fM" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Et6Pw0Ru1fM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" title="YouTube video"></iframe><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><span style="white-space: pre-wrap;">=====</span></p><p class="CKBEditorTheme__paragraph"><img src="https://test-img-theckb.oss-cn-hangzhou.aliyuncs.com/1718577448724.jpg" alt="" width="377" height="377"></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><h3 class="CKBEditorTheme__h3" dir="ltr"><span style="white-space: pre-wrap;">三级标题</span></h3><p class="CKBEditorTheme__paragraph"><span style="white-space: pre-wrap;">=====</span><br></p><p class="CKBEditorTheme__paragraph"><div class="ckb-editor-element-container-shop" data-ckb-editor-custom-config-shop="{&quot;__elementType&quot;:&quot;shop&quot;,&quot;urlList&quot;:[{&quot;url&quot;:&quot;https://wbaibu.1688.com&quot;}]}"></div></p><p class="CKBEditorTheme__paragraph"><div class="ckb-editor-element-container-product" data-ckb-editor-custom-config-product="{&quot;__elementType&quot;:&quot;product&quot;,&quot;urlList&quot;:[{&quot;url&quot;:&quot;https://master-s.theckb.com/ja/goods/AM-590322911390&quot;}]}"></div></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><div class="ckb-editor-element-container-artical" data-ckb-editor-custom-config-article="{&quot;__elementType&quot;:&quot;article&quot;,&quot;url&quot;:&quot;https://test-client-help.theckb.com/ja/article/95&quot;}"></div></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><h4 class="CKBEditorTheme__h4" dir="ltr"><span style="white-space: pre-wrap;">四级标题</span></h4><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><s><span class="CKBEditorTheme__textStrikethrough" style="white-space: pre-wrap;">划线</span></s></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">高亮</span></p><p class="CKBEditorTheme__paragraph" dir="ltr"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">链接</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a><a href="https://www.baidu.com" class="CKBEditorTheme__link"><span style="white-space: pre-wrap;">dianji baidu</span></a></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">文章</span></p><p class="CKBEditorTheme__paragraph" dir="ltr"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><div class="ckb-editor-element-container-shop" data-ckb-editor-custom-config-shop="{&quot;__elementType&quot;:&quot;shop&quot;,&quot;urlList&quot;:[{&quot;url&quot;:&quot;https://wbaibu.1688.com&quot;}]}"></div></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">按钮</span></p><p class="CKBEditorTheme__paragraph" dir="ltr"><button class="ckb-editor-element-container-button" data-ckb-editor-custom-config-button="{&quot;__elementType&quot;:&quot;button&quot;,&quot;color&quot;:&quot;red&quot;,&quot;children&quot;:&quot;热热舞热舞&quot;}"></button></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><button class="ckb-editor-element-container-button" data-ckb-editor-custom-config-button="{&quot;__elementType&quot;:&quot;button&quot;,&quot;color&quot;:&quot;blue&quot;,&quot;children&quot;:&quot;热热舞热舞&quot;,&quot;href&quot;:&quot;https://www.youtube.com/watch?v=Et6Pw0Ru1fM&quot;,&quot;type&quot;:&quot;primary&quot;}"></button></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p>`

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

export default function EditorDemo() {
    const editorRef = useRef<CKBEditorRef>(null);
    const [userInfo] = useAtom(atomCustomerDetail);

    return (
        <div>
            <div className="p-[16px] bg-[#ccc]" >
                <div className="pc:w-[810px] bg-white" >
                    <button
                        onClick={async () => {
                            const html = await editorRef.current?.getHtml?.();
                            console.log(66666, html)
                        }}
                    >
                        点我
                    </button>
                </div>
            </div>
            <CKBEditor
                isEditable
                ref={editorRef}
                toolbarClassName="xxxzz"
                isDev
                bizfields={{
                    userInfo
                }}
                initHtml={
                    // link
                    // button
                    // productDom
                    // artical
                    // zonghe
                    // zonghe1
                    // '<p class="CKBEditorTheme__paragraph" dir="ltr"><span style="background: linear-gradient(transparent 60%, rgba(252, 185, 0, 0.7) 0px); white-space: pre-wrap;">fewqfcewqfwq</span></p>'
                    // undefined
                    "<p class=\"CKBEditorTheme__paragraph\" dir=\"ltr\"><span style=\"background: linear-gradient(transparent 60%, rgba(252, 185, 0, 0.7) 0px); white-space: pre-wrap;\">rwrwrqw</span></p><p class=\"CKBEditorTheme__paragraph\"><br></p><p class=\"CKBEditorTheme__paragraph\"><br></p>"

                    // `
                    // <p class="CKBEditorTheme__paragraph"><br></p><div class="ckb-editor-element-container-artical" data-ckb-editor-custom-config-article="{&quot;__elementType&quot;:&quot;article&quot;,&quot;url&quot;:&quot;https://test-client-help.theckb.com/ja/article/95&quot;}"></div><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph" dir="ltr"><span style="white-space: pre-wrap;">evvcfsv</span></p><p class="CKBEditorTheme__paragraph"><br></p><div class="ckb-editor-element-container-artical" data-ckb-editor-custom-config-article="{&quot;__elementType&quot;:&quot;article&quot;,&quot;url&quot;:&quot;https://test-client-help.theckb.com/ja/article/95&quot;}"></div><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p><p class="CKBEditorTheme__paragraph"><br></p>
                    // `
                }
            />
        </div>
    );
}