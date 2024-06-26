/*
 * @Author: shiguang
 * @Date: 2024-06-05 11:56:46
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-05 15:49:13
 * @Description: 
 */

const cardHexList = [
    '#000', '#1F1F1F', '#434343', '#595959', '#8C8C8C', '#BFBFBF', '#F0F0F0', '#F5F5F5', '#FAFAFA', '#FFF',
    '#F5222D', '#FA541C', '#FA8C16', '#FADB14', '#52C41A', '#13C2C2', '#0586FE', '#2F54EB', '#722ED1', '#EB2F96',
    '#FFF1F0', '#FFF2E8', '#FFF7E6', '#FEFFE6', '#F6FFED', '#E6FFFB', '#E6F7FF', '#F0F5FF', '#F9F0FF', '#FFF0F6',
    '#FFCCC7', '#FFD8BF', '#FFE7BA', '#FFFFB8', '#D9F7BE', '#B5F5EC', '#A8E1FF', '#D6E4FF', '#EFDBFF', '#FFD6E7',
    '#FFA39E', '#FFBB96', '#FFD591', '#FFFB8F', '#B7EB8F', '#87E8DE', '#80CEFF', '#ADC6FF', '#D3ADF7', '#FFADD2',
    '#FF4D4F', '#FF7A45', '#FFA940', '#FFEC3D', '#73D13D', '#36CFC9', '#2EA1FF', '#597EF7', '#9254DE', '#F759AB',
    '#CF1322', '#D4380D', '#D46B08', '#D4B106', '#389E0D', '#08979C', '#0069D9', '#1D39C4', '#531DAB', '#C41D7F',
]
const choosedDom = (color: 'white' | 'black') => {
    const stroke = color;
    return <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M10.75 2.75L4.21875 9.25L1.25 6.29545" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
</svg>
}

// #8c8c8c

const blockChoose = [
    '#8C8C8C', '#BFBFBF', '#F0F0F0', '#F5F5F5', '#FAFAFA', '#FFF',
    '#FFF1F0', '#FFF2E8', '#FFF7E6', '#FEFFE6', '#F6FFED', '#E6FFFB', '#E6F7FF', '#F0F5FF', '#F9F0FF', '#FFF0F6',
    '#FFCCC7', '#FFD8BF', '#FFE7BA', '#FFFFB8', '#D9F7BE', '#B5F5EC', '#A8E1FF', '#D6E4FF', '#EFDBFF', '#FFD6E7',
    '#FFA39E', '#FFBB96', '#FFD591', '#FFFB8F', '#B7EB8F', '#87E8DE', '#80CEFF', '#ADC6FF', '#D3ADF7', '#FFADD2',
];

interface ColorCardProps {
    value?: string;
    onChange?: (value?: string) => any;
}

const ColorCard = (props: ColorCardProps) => {
    const { value, onChange } = props
    return <div>
        <div className="flex flex-wrap w-[250px] p-[4px]" >

        {cardHexList.map(item => {
            return <div
                style={{ backgroundColor: item }}
                className="cursor-pointer w-[16px] h-[16px] mr-[8px] rounded-[2px] mb-[8px] flex items-center justify-center relative group"
                key={item}
                onClick={() => {
                    onChange?.(item)
                }} 
                >
                <div className="left-[-2px] top-[-2px] absolute w-[20px] h-[20px] rounded-[2px] hidden group-hover:block border-[#ccc] border " />
                {item === value ? choosedDom(blockChoose.includes(item) ? 'black' : 'white') : null}
            </div>
        })}
        </div>
    </div>
}

export default ColorCard