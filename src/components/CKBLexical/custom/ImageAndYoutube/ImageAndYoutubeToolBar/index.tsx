/* eslint-disable jsx-a11y/alt-text */
/*
 * @Author: shiguang
 * @Date: 2024-05-23 18:03:08
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-17 06:36:55
 * @Description: 
 */
import { $getNodeByKey, $getSelection, LexicalEditor } from 'lexical';
import { useCallback, useEffect, useState } from 'react';
import TooltipWithMenu from '../../../components/TooltipWithMenu';
import { ButtonEditValue } from '../ImageAndYoutubeEditPanel';
import { useHideModalOnSelectionBlur, useSelectionEditPanelContentSetDom } from '../../../components/SelectionEditPanelContainer';
import ImageAndYoutubeEditPanel from '../ImageAndYoutubeEditPanel';
// import Button from '../../../Icon/components/Button';
import mitt from 'mitt';
import Image from '../../../Icon/components/Image';
import { INSERT_IMAGE_COMMAND } from '../../Image/ImagePlugin';
import { INSERT_YOUTUBE_COMMAND } from '../../Youtube/YouTubePlugin';
import { Button, Form, Input, Modal, Tabs, message } from 'antd';
import ImageUpload from '../../../components/ImageUpload';
import { REGEXP_URL } from '../../../utils/regexp';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

export const buttonToolBarEmitter = mitt<{ editButton: string }>()

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
    const [form] = Form.useForm()
    /**
     * 编辑的时候
     */
    // const [editButtonKey, setEditButtonKey] = useState<string>();
    const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
    const [buttonValue, setButtonValue] = useState<ButtonEditValue | undefined>();

    const hideModal = () => {
        // setButtonValue(undefined)
        setIsButton(false)
        form.resetFields()
        // setEditButtonKey(undefined)
    }
    // const buttonEditPanelDom = useCallback((_isButton: boolean) => {
    //     return _isButton ? <ImageAndYoutubeEditPanel
    //         key={editButtonKey}
    //         onChange={(val) => {
    //             console.log(val, 'onChange');
    //             setButtonValue(val)
    //         }}
    //         value={buttonValue}
    //         onImageChange={(url) => {
    //             if (!url) return;
    //             hideModal();
    //             activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, { src: url, altText: '' });
    //         }}
    //         onYoutubeOk={async (url) => {
    //             if (!url) return;
    //             hideModal();
    //             const res = await YoutubeEmbedConfig.parseUrl(url)
    //             if (!res) {
    //                 message.warning('请输入正确的 Youtube 链接');
    //                 return;
    //             }
    //             YoutubeEmbedConfig.insertNode(activeEditor, res!);
    //         }}
    //     /> : null
    // }, [activeEditor, buttonValue, editButtonKey]);

    // useEffect(() => {
    //     setSelectionEditPanelContentDom(
    //         buttonEditPanelDom(isButton)
    //     )
    // }, [buttonEditPanelDom, setSelectionEditPanelContentDom, isButton])
    // useHideModalOnSelectionBlur(() => {
    //     setButtonValue(undefined);
    //     setIsButton(false);
    // })
    // useEffect(() => {
    //     buttonToolBarEmitter.on('editButton', (key) => {
    //         activeEditor.update(() => {
    //             setEditButtonKey(key)
    //             const node = $getNodeByKey(key) as any;
    //             const { __elementType, ...other } = node.getOptions()
    //             form.setFieldsValue(other)
    //             // setButtonValue(other)
    //             setTimeout(() => {
    //                 setIsButton(true)
    //             }, 300)
    //         })
    //     })
    //     return () => {
    //         buttonToolBarEmitter.all.clear();
    //     }
    // }, [activeEditor, form])

    return (
        <div>
            <Modal open={isButton}
                onCancel={hideModal}
                footer={false}
            >
                <Form form={form} initialValues={{ imageOrYoutube: 'image' }} >
                    <div>
                        <Form.Item name="imageOrYoutube" valuePropName="activeKey" noStyle  >
                            <Tabs
                                items={[
                                    { label: '图片', key: 'image' },
                                    { label: '视频', key: 'youtube' },
                                ]}
                            />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item shouldUpdate noStyle >
                            {
                                ({ getFieldValue }) => {
                                    console.log(getFieldValue('imageOrYoutube'), 333)
                                    if (getFieldValue('imageOrYoutube') !== 'image') return null
                                    return <Form.Item name="imageUrl" noStyle >
                                        <ImageUpload
                                        // onChange={onImageChange}
                                        >
                                            {(url) => {
                                                if (!url) return (
                                                    <div className="h-[138px] w-[448px] flex items-center cursor-pointer justify-center" >
                                                        <div className='text-center' >单击或拖动文件到此区域进行上传</div>
                                                    </div>
                                                )
                                                return (
                                                    <div
                                                        className={`h-[138px] !w-[448px] flex items-center cursor-pointer justify-center bg-contain bg-no-repeat`}
                                                        style={{
                                                            backgroundImage: `url(${url})`, backgroundPosition: 'center'
                                                        }}
                                                    >
                                                    </div>
                                                )
                                            }}
                                        </ImageUpload>
                                    </Form.Item>
                                }
                            }
                        </Form.Item>
                    </div>
                    <Form.Item shouldUpdate noStyle >
                        {({ getFieldValue }) => {
                            if (getFieldValue('imageOrYoutube') !== 'youtube') return null
                            return <div>
                                <div className="leading-[22px]">链接</div>
                                <Form.Item name="href" >
                                    <Input placeholder="请输入" />
                                </Form.Item>
                            </div>
                        }}
                    </Form.Item>
                    <Form.Item noStyle shouldUpdate >
                        {() => {
                            const  isYoutube = form.getFieldValue('imageOrYoutube') === 'youtube';
                            // if (getFieldValue('imageOrYoutube') !== 'youtube') return null

                            const isOk = (
                                (isYoutube && REGEXP_URL.test(form.getFieldValue('href')))
                                || (!isYoutube && REGEXP_URL.test(form.getFieldValue('imageUrl')))
                            )
                            return <Button
                                className="mt-[8px]"
                                disabled={!isOk}
                                onClick={async () => {
                                    const values = form.getFieldsValue();
                                    hideModal();
                                    if (values.imageOrYoutube === 'youtube') {
                                        if (!values.href) return;
                                        const res = await YoutubeEmbedConfig.parseUrl(values.href)
                                        if (!res) {
                                            message.warning('请输入正确的 Youtube 链接');
                                            return;
                                        }
                                        YoutubeEmbedConfig.insertNode(activeEditor, res!);
                                        return;
                                        // onYoutubeOk?.(values.href)
                                    }
                                    hideModal();
                                    activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, { src: values.imageUrl, altText: '' });
                                    // onChange?.(values)
                                    // onOk?.(values)
                                }}
                            >
                                确定
                            </Button>
                        }}

                    </Form.Item>

                </Form>
            </Modal>
            <Form form={form} >

            </Form>
            <TooltipWithMenu isShowToolTip title="插入图片或视频">
                <button
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isButton ? 'hover:bg-[#f0f0f0]' : ''}`}
                    onClick={() => {
                        // setSelectionEditPanelContentDom(buttonEditPanelDom(true))
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