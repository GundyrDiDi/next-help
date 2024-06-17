/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: shiguang
 * @Date: 2024-05-23 16:23:31
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 16:52:20
 * @Description: 
 */
import { Button } from "antd";
import {
  UndoOutlined,
  RedoOutlined
} from '@ant-design/icons';
import {
  $findMatchingParent,
  mergeRegister,
} from '@lexical/utils';
import { useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getPreviousSelection, $getSelection, $isRangeSelection, $isRootOrShadowRoot, $setSelection, COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND } from "lexical";
import { useSelectionChange } from "./hooks/useSelectionChange";
import HistoryMenu from "./components/HistoryMenu";
import Heading from "./components/Heading";
import { $isHeadingNode } from "@lexical/rich-text";
import FontSize from "./components/FontSize";
import BoldUnderlineIttalic from "./components/BoldUnderlineIttalic";
import Color from "./components/Color";
import Image from "./components/Image";
import TextAlign from "./components/TextAlign";
import FontFamily from "./components/FontFamily";
import GoodsToolBar from "../Goods/GoodsToolBar";
import Trigger from "@rc-component/trigger";
import ColorCard from "../../components/ColorCard";
import ColorChooseButton from "../../components/ColorChooseButton";
import Link from "./components/Link/indext";
import LinkEditPanel from "./components/Link/components/LinkEditPanel";
import ButtonToolBar from "../Button/ButtonToolBar";
import ImageAndYoutubeToolBar from "../ImageAndYoutube/ImageAndYoutubeToolBar";
import ArticleToolBar from "../Article/ArticleToolBar";
import ShopToolBar from "../Shop/ShopToolBar";
import ProductToolBar from "../Product/ProductToolBar";
import { useSettings } from "../../context/SettingsContext";
// import Product from "../../Icon/components/Product";




/**
 * 但选中之后，通过选中的数据会对 toolbar 进行更新
 * 包括不限于 
 * text format 状态的展示
 * link的高亮
 * align 的选中 （ left right center ）
 * 字体的显示
 * h1 h2 标签的显示
 */

const ToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [isEditable, setIsEditable] = useState(() => editor.isEditable());
  const [activeEditor, setActiveEditor] = useState(editor);
  const { settings } = useSettings()

  useSelectionChange(activeEditor, (newEditor) => {
    setActiveEditor(newEditor)
  })

  // useEffect(() => {
  //   const click = (e: MouseEvent) => {
  //     const target = e.target as HTMLElement
  //     if (target?.tagName === 'INPUT') {
  //       return;
  //     }
  //     const button = target.closest('button')
  //     const selectionEditPanelContainer = target.closest('#J_SelectionEditPanelContainer')
  //     const popover = target.closest('.ant-popover')

  //     if(button || selectionEditPanelContainer || popover){
  //       editor.update(() => {
  //         // const selection = $getSelection();
  //         const selection = $getPreviousSelection();
  //         if ($isRangeSelection(selection)) {
  //           $setSelection(selection)
  //         }
  //       })
  //     }
  //   }
  //   window.document.addEventListener('mousedown',click );
  //   return () => {
  //     window.document.removeEventListener('mousedown',click );
  //   }
  // }, [editor])

  if (!isEditable) return null;
  return (
    < >
      <div
        className={`border-b border-[#F0F0F0] h-[44px] flex items-center px-[8px] py-[4px] z-[9] bg-white flex-wrap ${settings.toolbarClassName ?? ''}`}
        onClick={(e) => {
          // const target = e.target as HTMLElement
          // console.log(e.target)
          // if (target?.tagName === 'INPUT') {
          //   return;
          // }
          // const button = target.closest('button')
          // const selectionEditPanelContainer = target.closest('#J_SelectionEditPanelContainer')
          // if(
          //   !button || !selectionEditPanelContainer
          //   || target.closest('.ant-popover')
          // ) return
          // console.log(e.target, 666)
          // console.log(e.target, 666)
          // console.log(e.target, 666)
          // editor.update(() => {
          //   const selection = $getSelection();
          //   if ($isRangeSelection(selection)) {
          //     $setSelection(selection)
          //   }
          // })
        }}
      >
        <HistoryMenu activeEditor={activeEditor} />
        <div className="border-r border-[#F0F0F0] mx-[8px] h-[24px]" />
        <Heading activeEditor={activeEditor} />
        <div className="border-r border-[#F0F0F0] mx-[8px] h-[24px]" />
        {/* <FontSize activeEditor={activeEditor} />
        <div className="border-r border-[#F0F0F0] mx-[8px] h-[24px]" /> */}
        <BoldUnderlineIttalic activeEditor={activeEditor} />
        <div className="border-r border-[#F0F0F0] mx-[8px] h-[24px]" />
        <Color activeEditor={activeEditor} />
        <div className="border-r border-[#F0F0F0] mx-[8px] h-[24px]" />
        <TextAlign activeEditor={activeEditor} />
        <div className="border-r border-[#F0F0F0] mx-[8px] h-[24px]" />
        <Link activeEditor={activeEditor} />
        <div className="border-r border-[#F0F0F0] mx-[8px] h-[24px]" />
        <ArticleToolBar activeEditor={activeEditor} />
        <ButtonToolBar activeEditor={activeEditor} />
        <ImageAndYoutubeToolBar activeEditor={activeEditor} />
        <ShopToolBar activeEditor={activeEditor} />
        <ProductToolBar activeEditor={activeEditor} />
        <div
          className="cursor-pointer"
          onClick={() => {
            editor.setEditable(false)
            setIsEditable(false)
          }}
        >
          查看文章
        </div>

      </div>
    </>

  )
}
export default ToolbarPlugin;