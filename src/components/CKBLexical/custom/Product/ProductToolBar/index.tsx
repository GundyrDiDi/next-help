/*
 * @Author: shiguang
 * @Date: 2024-06-13 10:42:45
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-18 16:31:59
 * @Description: 
 */
import { $getNodeByKey, $getSelection, LexicalEditor } from 'lexical';
import { useEffect, useRef, useState } from 'react';
import TooltipWithMenu from '../../../components/TooltipWithMenu';
import mitt from 'mitt';
import MultiUrlModal from '../../../components/MultiUrlModal';
import Product from '../../../Icon/components/Product';
import { $createProductNode, ProductNode } from '../ProductNode';
import { ProductUIProps } from '../ProductUI';
import { FormInstance } from 'antd';
interface HeadingMenuProps {
    activeEditor: LexicalEditor;
}

export const productToolBarEmitter = mitt<{ editProduct: string }>()

const ProductToolBar = (props: HeadingMenuProps) => {
    const { activeEditor } = props;
    const [isProduct, setIsProduct] = useState(false);

    /**
     * 编辑的时候
    */
    const [editProductKey, setEditProductKey] = useState<string>();
    const [productValue, setProductValue] = useState<ProductUIProps['urlList']>();
    useEffect(() => {
        productToolBarEmitter.on('editProduct', (key) => {
            activeEditor.update(() => {
                setEditProductKey(key)
                const node = $getNodeByKey(key) as ProductNode;
                const { urlList } = node.getOptions()
                setProductValue(urlList)
                setTimeout(() => {
                    setIsProduct(true)
                }, 300)
            })
        })
        return () => {
            productToolBarEmitter.all.clear();
        }
    }, [activeEditor])

    return (
        <div>
            {isProduct && <MultiUrlModal
                initialValue={productValue}
                onClose={() => setIsProduct(false)}
                onOk={(urlList) => {
                    if (!urlList?.length) return;
                    setIsProduct(false)
                    activeEditor.update(() => {
                        if (editProductKey) {
                            const node = $getNodeByKey(editProductKey) as ProductNode
                            node.setOptions({
                                urlList
                            })
                            return;
                        }
                        const createdNode = $createProductNode({
                            urlList
                        })
                        const selection = $getSelection();
                        if (!selection) return;
                        selection.insertNodes([
                            createdNode
                        ]);
                    })
                }}
                type="product"
                maxCount={8}
            />}
            <TooltipWithMenu isShowToolTip title="插入商品">
                <div
                    className={`h-[32px] w-[32px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center rounded-[8px] ${isProduct ? 'hover:bg-[#f0f0f0]' : ''}`}
                    onClick={() => {
                        setIsProduct(true)

                    }}
                >
                    <Product />
                </div>
            </TooltipWithMenu>
        </div>
    );
}
export default ProductToolBar;