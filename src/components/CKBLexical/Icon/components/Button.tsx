
/*
 * @Author: shiguang
 * @Date: 2024-06-04 16:41:13
 * @LastEditors: shiguang
 * @LastEditTime: 2024-06-13 11:53:36
 * @Description: 
 */
import { SVGProps } from "react"

interface CommonIconProps extends SVGProps<SVGSVGElement> {
}
const Button = (props: CommonIconProps) => {
    const {...svgProps} = props;
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" {...svgProps} >
        {/* <path stroke={pathStroke}  fillRule="evenodd" clipRule="evenodd" d="M8.00003 8.00001C9.52936 8.00001 10.7691 6.75635 10.7691 5.22224C10.7691 3.68811 9.52936 2.44446 8.00003 2.44446H4.38892V8.00001H8.00003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path stroke={pathStroke}  fillRule="evenodd" clipRule="evenodd" d="M9.11981 13.5556C10.6491 13.5556 11.8889 12.3119 11.8889 10.7778C11.8889 9.24367 10.6491 8 9.11981 8H4.38892V13.5556H9.11981Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> */}

        <g clipPath="url(#clip0_1466_380)">
            <path d="M12 1.33331H4.00004C2.52728 1.33331 1.33337 2.52722 1.33337 3.99998C1.33337 5.47275 2.52728 6.66665 4.00004 6.66665H12C13.4728 6.66665 14.6667 5.47275 14.6667 3.99998C14.6667 2.52722 13.4728 1.33331 12 1.33331Z" stroke="#262626" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 9.33331H4.00004C2.52728 9.33331 1.33337 10.5272 1.33337 12C1.33337 13.4727 2.52728 14.6666 4.00004 14.6666H12C13.4728 14.6666 14.6667 13.4727 14.6667 12C14.6667 10.5272 13.4728 9.33331 12 9.33331Z" stroke="#262626" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 4.66665C12.3682 4.66665 12.6667 4.36818 12.6667 3.99998C12.6667 3.63178 12.3682 3.33331 12 3.33331C11.6318 3.33331 11.3334 3.63178 11.3334 3.99998C11.3334 4.36818 11.6318 4.66665 12 4.66665Z" stroke="#262626" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M4.00004 12.6666C4.36824 12.6666 4.66671 12.3682 4.66671 12C4.66671 11.6318 4.36824 11.3333 4.00004 11.3333C3.63184 11.3333 3.33337 11.6318 3.33337 12C3.33337 12.3682 3.63184 12.6666 4.00004 12.6666Z" stroke="#262626" strokeWidth="1.5" strokeLinejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_1466_380">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
}
export default Button

