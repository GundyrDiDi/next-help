/*
 * @Author: shiguang
 * @Date: 2024-05-15 23:10:55
 * @LastEditors: shiguang
 * @LastEditTime: 2024-05-16 17:51:26
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

const HotArticalList = () => {
    return <div className="bg-[#fff]" >
        <div
            className="bg-[#008060] font-[16px] text-[#fff] leading-[40px] h-[40px] px-[8px]"
            style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
        >
            人気記事
        </div>
        {list.map((item, idx) => <div
            key={idx}
            className="flex text-[#666] text-[14px] px-[8px] py-[10px] cursor-pointer"
            style={idx !== list.length - 1 ? { borderBottom: '1px dashed #E3E3E3 ' } : {}}
        >
            <div className="w-[210px] line-clamp-2" >{item.title}</div>
            <div>{idx}</div>
        </div>)}
    </div>
}
export default HotArticalList