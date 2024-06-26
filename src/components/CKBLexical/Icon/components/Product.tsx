
/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-13 10:40:47
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
    // pathStroke?: string;
    isActive?: boolean;
}
const Product = (props: CommonIconProps) => {
    const { isActive = false, ...svgProps } = props;
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <path d="M12.6665 1.33331H3.33317C2.96498 1.33331 2.6665 1.63179 2.6665 1.99998V14C2.6665 14.3682 2.96498 14.6666 3.33317 14.6666H12.6665C13.0347 14.6666 13.3332 14.3682 13.3332 14V1.99998C13.3332 1.63179 13.0347 1.33331 12.6665 1.33331Z" stroke="#262626" strokeWidth="1.33333" strokeLinejoin="round" />
        <path d="M7.99984 6.33335C8.7362 6.33335 9.33317 5.73639 9.33317 5.00002C9.33317 4.26365 8.7362 3.66669 7.99984 3.66669C7.26347 3.66669 6.6665 4.26365 6.6665 5.00002C6.6665 5.73639 7.26347 6.33335 7.99984 6.33335Z" stroke="#262626" strokeWidth="1.33333" strokeLinejoin="round" />
        <path d="M10 8.33331C10 7.22875 9.10457 6.33331 8 6.33331C6.89543 6.33331 6 7.22875 6 8.33331" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10.3333H10" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12.3333H8.33333" stroke="#262626" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}
export default Product
