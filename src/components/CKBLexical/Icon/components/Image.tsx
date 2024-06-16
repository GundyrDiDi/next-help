
/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-12 01:37:47
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
    isActive?: boolean;
}
const Image = (props: CommonIconProps) => {
    const { isActive = false, ...svgProps } = props;

    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        <path fillRule="evenodd" clipRule="evenodd" d="M1.66663 3.33341C1.66663 2.96522 1.9651 2.66675 2.33329 2.66675H13.6666C14.0348 2.66675 14.3333 2.96522 14.3333 3.33341V12.6667C14.3333 13.0349 14.0348 13.3334 13.6666 13.3334H2.33329C1.9651 13.3334 1.66663 13.0349 1.66663 12.6667V3.33341Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.83337 6C5.10951 6 5.33337 5.77613 5.33337 5.5C5.33337 5.22387 5.10951 5 4.83337 5C4.55724 5 4.33337 5.22387 4.33337 5.5C4.33337 5.77613 4.55724 6 4.83337 6Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.99996 8L6.66663 9.33333L8.66663 7L14.3333 11.3333V12.6667C14.3333 13.0349 14.0348 13.3333 13.6666 13.3333H2.33329C1.9651 13.3333 1.66663 13.0349 1.66663 12.6667V11.3333L4.99996 8Z" stroke="#262626" strokeWidth="1.5" strokeLinejoin="round" />
        {/* <path d="M2 14.6666V8.33329H4V5.66663H12V8.33329H14V14.6666H2Z"  strokeWidth="1.33333" strokeLinejoin="round"/>
       <path d="M5.66663 5.66671V2.66671L10.3333 1.33337V5.66671"  strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/> */}
    </svg>
}
export default Image
