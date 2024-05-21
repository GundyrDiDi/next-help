/*
 * @Author: shiguang
 * @Date: 2024-05-17 16:28:04
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-21 14:48:23
 * @Description: 
 */
import { atom } from "jotai";
import { useParams, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

/** 青蛙文章 当前状态是否是阅读记录 */
export const atomIsArticalReadRecord = atom(false);


export const requestReadRecordContext = (() => {
    let _requestReadRecordContext = () => { };
    return {
        setRequestReadRecordContext: (ctxFunction: () => void) => {
            _requestReadRecordContext = ctxFunction;
        },
        requestReadRecord: () => {
            _requestReadRecordContext()
        }
    }
})();

interface ReadRecordMenuItem {
    closeMenu: () => void;
}

export const ReadRecordMenuItem = (props: ReadRecordMenuItem) => {
    const { closeMenu } = props;
    const pathName = usePathname()
    const { lang: _paramsLang } = useParams()
    const { t } = useTranslation();
    const isHomePage = `/${_paramsLang}` === pathName;
    if (!isHomePage) return null;
    return <div
        onClick={() => {
            requestReadRecordContext.requestReadRecord();
            closeMenu();
        }}
        className="bg-[#fff] mo:text-center mo:h-[50px] flex items-center justify-center text-[--color-primary] text-[16px] "
        style={{ borderBottom: '1px solid #E6EAF0' }}
    >
        {t('浏览记录')}
    </div>
}