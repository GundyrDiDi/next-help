/*
 * @Author: shiguang
 * @Date: 2024-05-15 23:10:55
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-20 11:02:47
 * @Description: 
 */

const list = [
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },
    {
        title: '中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて中国輸入ヤフオク販売のメリットと儲かる商品のリサーチ方法に…いて',
    },

]

const HotArtical = () => {
    return <div className="pc:hidden pad:hidden pc:rounded-[8px] overflow-hidden" >
        <div
            className="bg-[--pcolor] font-[16px] text-[#fff] leading-[40px] h-[40px] px-[8px]"
            // style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
        >
            人気記事
        </div>
        {list.map((item, idx) => <div
            key={idx}
            className="flex text-[#666] text-[14px] px-[8px] py-[10px]"
            style={idx !== list.length - 1 ? { borderBottom: '1px dashed #E3E3E3 ' } : {}}
        >
            <div className="w-[210px] line-clamp-2" >{item.title}</div>
            <div>{idx}</div>
        </div>)}
    </div>
}
export default HotArtical