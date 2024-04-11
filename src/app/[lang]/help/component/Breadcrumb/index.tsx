/*
 * @Author: shiguang
 * @Date: 2024-04-10 16:48:00
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-10 21:18:56
 * @Description: 
 */
import Link from "next/link";
import { Fragment } from "react";

interface BreadcrumbItem{
    title:string;
    href?:string;
}
interface BreadcrumbProps{
    dataSource: BreadcrumbItem[];
    className?: string;

}
const Breadcrumb = (props: BreadcrumbProps) => {
    const { dataSource, className } = props;
    return (
        <div className={`text-[#000]/[.88] text-[14px] flex ${className ?? ''}`} >
            {dataSource.map((item, index) => {
                const isLast = index + 1 === dataSource.length;
                const titleDom = <span className={`mr-[8px] ${ item.href ? 'cursor-pointer' : ''} ${isLast ? 'text-[#000]/[.45]' : ''}`}  >
                    { item.title }
                </span>
                return (
                    <Fragment key={item.title} >
                        {item.href === undefined ? titleDom : <Link href={item.href} >{titleDom}</Link> }
                        {isLast ? null : <span className="mr-[8px]" >/</span>}
                    </Fragment>
                )
            })}
        </div>
    );
}
export default Breadcrumb