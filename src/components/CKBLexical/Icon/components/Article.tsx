
/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-12 19:48:03
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
    // pathStroke?: string;
    isActive?: boolean;
}
const Article = (props: CommonIconProps) => {
    const { isActive = false, ...svgProps } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <path d="M9.66671 1.3335H3.00004C2.63185 1.3335 2.33337 1.63197 2.33337 2.00016V14.0002C2.33337 14.3684 2.63185 14.6668 3.00004 14.6668H12.3334C12.7016 14.6668 13 14.3684 13 14.0002V6.66836" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.33337 6H7.00004" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.33337 9.3335H8.33337" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.6663 2.00049L9.66809 5.99876" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}
export default Article
