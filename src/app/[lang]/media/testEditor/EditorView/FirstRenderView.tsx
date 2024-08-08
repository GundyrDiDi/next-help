/*
 * @Author: shiguang
 * @Date: 2024-06-17 01:06:37
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 01:13:13
 * @Description: 
 */
import './override.scss';
import '../../../../../components/CKBLexical/theme/ckbTheme/index.scss'

interface FirstRenderView{
    initHtml?: string;
}

const FirstRenderView = (props: FirstRenderView) => {
    if(!props.initHtml) return null;
    return <div className="ckb-editor-view-container" >
        <div dangerouslySetInnerHTML={{ __html: props.initHtml }} >
        </div>
    </div>
}
export default FirstRenderView;
