/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 06:23:05
 * @Description: 
 */
import {  $getNodeByKey, $getSelection, LexicalEditor } from 'lexical';
import { useCallback, useEffect, useState } from 'react';
import TooltipWithMenu from '../../../components/TooltipWithMenu';
import  { ButtonEditValue } from '../ImageAndYoutubeEditPanel';
import { useHideModalOnSelectionBlur, useSelectionEditPanelContentSetDom } from '../../../components/SelectionEditPanelContainer';
import ImageAndYoutubeEditPanel from '../ImageAndYoutubeEditPanel';
import Button from '../../../Icon/components/Button';
import mitt from 'mitt';
import Image from '../../../Icon/components/Image';
import { INSERT_IMAGE_COMMAND } from '../../Image/ImagePlugin';
import { INSERT_YOUTUBE_COMMAND } from '../../Youtube/YouTubePlugin';
import { Form, message } from 'antd';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

export const buttonToolBarEmitter = mitt<{editButton: string}>()

export type EmbedMatchResult<TEmbedMatchResult = unknown> = {
    url: string;
    id: string;
    data?: TEmbedMatchResult;
  };

export const YoutubeEmbedConfig = {
    contentName: 'Youtube Video',
  
    exampleUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  
    // Icon for display.
    icon: <i className="icon youtube" />,
  
    insertNode: (editor: LexicalEditor, result: EmbedMatchResult) => {
      editor.dispatchCommand(INSERT_YOUTUBE_COMMAND, result.id);
    },
  
    keywords: ['youtube', 'video'],
  
    // Determine if a given URL is a match and return url data.
    parseUrl: async (url: string) => {
      const match =
        /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(url);
  
      const id = match ? (match?.[2].length === 11 ? match[2] : null) : null;
  
      if (id != null) {
        return {
          id,
          url,
        };
      }
  
      return null;
    },
  
    type: 'youtube-video',
  };

const ImageAndYoutubeToolBar = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [isButton, setIsButton] = useState(false);
    /**
     * 编辑的时候
     */
    const [editButtonKey, setEditButtonKey] = useState<string>();
    const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
    const [buttonValue, setButtonValue] = useState<ButtonEditValue | undefined>();

    const buttonEditPanelDom = useCallback((_isButton: boolean) => {
        const hideModal = () => {
            setButtonValue(undefined)
            setIsButton(false)
            setEditButtonKey(undefined)
        }
        return _isButton ? <ImageAndYoutubeEditPanel
            key={editButtonKey}
            onChange={(val) => {
                console.log(val, 'onChange');
                setButtonValue(val)
            }}
            value={buttonValue}
            onImageChange={(url) => {
                if(!url) return;
                hideModal();
                activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, { src: url, altText: '' });
            }}
            onYoutubeOk={async (url) => {
                if(!url) return;
                hideModal();
                const res = await YoutubeEmbedConfig.parseUrl(url)
                if(!res) {
                    message.warning('请输入正确的 Youtube 链接');
                    return;
                }
                YoutubeEmbedConfig.insertNode(activeEditor, res!);
            }}
        /> : null
    }, [activeEditor, buttonValue, editButtonKey]);

    useEffect(() => {
        setSelectionEditPanelContentDom(
            buttonEditPanelDom(isButton)
        )
    }, [buttonEditPanelDom, setSelectionEditPanelContentDom, isButton])
    useHideModalOnSelectionBlur(() => {
        setButtonValue(undefined);
        setIsButton(false);
    })
    useEffect(() => {
        buttonToolBarEmitter.on('editButton', (key) => {
            activeEditor.update(() => {
                setEditButtonKey(key)
                const node = $getNodeByKey(key) as any;
                const { __elementType, ...other} = node.getOptions()
                setButtonValue(other)
                setTimeout(() => {
                    setIsButton(true)
                }, 300)
            })
        })
        return () => {
            buttonToolBarEmitter.all.clear();
        }
    }, [activeEditor])

    return (
        <div>
            <Form>
                
            </Form>
            <TooltipWithMenu isShowToolTip title="插入图片或视频">
                <button 
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isButton ? 'hover:bg-[#f0f0f0]' : ''}`} 
                    onClick={() => {
                        setSelectionEditPanelContentDom(buttonEditPanelDom(true))
                        setIsButton(true)
                    }}
                >
                    <Image />
                </button>
            </TooltipWithMenu>
        </div>
    );
}
export default ImageAndYoutubeToolBar;