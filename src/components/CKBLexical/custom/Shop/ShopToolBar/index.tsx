import { $getNodeByKey, $getSelection, LexicalEditor } from 'lexical';
import { useEffect, useState } from 'react';
import TooltipWithMenu from '../../../components/TooltipWithMenu';

import mitt from 'mitt';
import MultiUrlModal from '../../../components/MultiUrlModal';
import Shop from '../../../Icon/components/Shop';
import { $createShopNode, ShopNode } from '../ShopNode';
import { ShopUIProps } from '../ShopUI';

interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

export const shopToolBarEmitter = mitt<{ editShop: string }>()

const ShopToolBar = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [isShop, setIsShop] = useState(false);
    /**
     * 编辑的时候
    */
    const [editShopKey, setEditShopKey] = useState<string>();
    // const setSelectionEditPanelContentDom = useSelectionEditPanelContentSetDom()
    const [shopValue, setShopValue] = useState<ShopUIProps['urlList']>();

    // const ShopEditPanelDom = useCallback((_isShop: boolean) => {
    //     return _isShop ? <ShopEditPanel
    //         key={editShopKey}
    //         // onChange={(val) => {
    //         //     console.log(val, 'onChange');
    //         //     setShopValue(val)
    //         // }}
    //         value={shopValue}
    //         onOk={(_value) => {
    //             const hideModal = () => {
    //                 setShopValue(undefined)
    //                 setIsShop(false)
    //                 setEditShopKey(undefined)
    //             }
    //             activeEditor.update(() => {
    //                 const newOptions = {
    //                     url: _value
    //                 }
    //                 if(editShopKey){
    //                     const node = $getNodeByKey(editShopKey) as ShopNode
    //                     node.setOptions(newOptions)
    //                     hideModal();
    //                     return true;
    //                 }
    //                 const selection = $getSelection()!
    //                 if(!selection) return;
    //                 const shopNode = $createShopNode(newOptions);
    //                 selection.insertNodes([
    //                     shopNode
    //                 ]);
    //                 hideModal();
    //                 return true
    //             })
    //         }}
    //     /> : null
    // }, [activeEditor, shopValue, editShopKey]);


    // useEffect(() => {
    //     setSelectionEditPanelContentDom(
    //         ShopEditPanelDom(isShop)
    //     )
    // }, [ShopEditPanelDom, setSelectionEditPanelContentDom, isShop])
    // useHideModalOnSelectionBlur(() => {
    //     setShopValue(undefined);
    //     setIsShop(false);
    // })
    useEffect(() => {
        shopToolBarEmitter.on('editShop', (key) => {
            activeEditor.update(() => {
                setEditShopKey(key)
                const node = $getNodeByKey(key) as ShopNode;
                const { urlList } = node.getOptions()
                setShopValue(urlList)
                setTimeout(() => {
                    setIsShop(true)
                }, 300)
            })
        })
        return () => {
            shopToolBarEmitter.all.clear();
        }
    }, [activeEditor])

    return (
        <div>
            {isShop && <MultiUrlModal
                initialValue={shopValue}
                onClose={() => setIsShop(false)}
                onOk={(urlList) => {
                    if (!urlList?.length) return;
                    setIsShop(false)
                    activeEditor.update(() => {
                        if(editShopKey){
                            const node = $getNodeByKey(editShopKey) as ShopNode
                            node.setOptions({
                                urlList
                            })
                            return;
                        }
                        const createdNode = $createShopNode({
                            urlList
                        })   
                        const selection = $getSelection();
                        if(!selection) return;
                        selection.insertNodes([
                            createdNode
                        ]);
                    })
                }}
                type="shop"
                maxCount={8}
            />}
            <TooltipWithMenu isShowToolTip title="插入店铺">
                <div
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isShop ? 'hover:bg-[#f0f0f0]' : ''}`}
                    onClick={() => {
                        setIsShop(true)
                        // activeEditor.update(() => {

                        //     // setEditShopKey(key)
                        //     // const node = $getNodeByKey(key) as ShopNode;
                        //     // const { url } = node.getOptions()
                        //     // setShopValue(url)
                        //     // debugger
                        //     // setTimeout(() => {
                        //     //     setIsShop(true)
                        //     // }, 300)
                        // })
                        // setSelectionEditPanelContentDom(ShopEditPanelDom(true))
                        // setIsShop(true)
                    }}
                >
                    <Shop />
                </div>
            </TooltipWithMenu>
        </div>
    );
}
export default ShopToolBar;