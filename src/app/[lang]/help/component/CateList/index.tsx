/*
 * @Author: shiguang
 * @Date: 2024-04-08 11:47:37
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-08 16:22:23
 * @Description: 
 */
interface CateListProps{
    label: string;
    value: string;
    childrenCateList?: CateListProps[];
    className?: string;
}

const FirstCate = (props: CateListProps) => {
    return <div className="p-[32px] bg-white" >
        <div className="flex h-[24px] items-center mb-[32px]" >
            <div className="w-[5px] h-[24px] bg-[#008060] mr-[8px]" ></div> 
            <div className="text-[24px]" >
                {props.label}
            </div>
        </div>
        <div className="flex flex-wrap pb-[-16px]" >
            {props.childrenCateList?.map((item, key) => {
                return <SecondCate label={item.label} value={item.value} key={key} className="mb-[16px] w-[33%]" />
            })}
        </div>
    </div>
}

interface SecondCateProps extends CateListProps {
    className?: string
}

const SecondCate = (props: SecondCateProps) => {
    const {className} = props;
    return <div className={className} >
        <div className="flex h-[24px] text-[20px] hover:text-[#008060] text-[#000000]/[.88] cursor-pointer" >
            <div className="bg-[#008060] w-[6px] h-[6px] rounded-[50%] mr-[6px]" />
            <span>
                注文管理
            </span>
        </div>
    </div>
}

const CateList = (props: CateListProps) => {
    return <div className={props.className} >
        <FirstCate {...props} />
    </div>
}

export default CateList;


