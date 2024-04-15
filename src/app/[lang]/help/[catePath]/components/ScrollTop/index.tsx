/*
 * @Author: shiguang
 * @Date: 2024-04-15 14:36:26
 * @LastEditors: shiguang
 * @LastEditTime: 2024-04-15 20:26:35
 * @Description: 
 */
import { useEffect, useState } from "react"
import ScrollTopIcon from "../ScrollTopIcon"

const ScrollTop = () => {
    const [show, setShow] = useState(false)
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    useEffect(() => {
        const handleScroll = () => {
            console.log(333, window.scrollY)
            if (window.scrollY > window.innerHeight) {
                console.log(4444, window.scrollY)
                setShow(true)
            } else {
                setShow(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
    if (!show) return null;
    return (
        <div className="fixed z-10 w-[100%] bottom-[16px] flex justify-center mo:!hidden pad:!hidden" >
            <div className="w-[100%] pc:w-[1200px] flex justify-end" >
                <div
                    onClick={scrollTop}
                    style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.08)' }}
                    className={`
                    cursor-pointer relative pc:right-[-60px] pc:h-[48px] pc:w-[48px] pc:rounded-[24px] flex justify-center items-center shadow-[5px] bg-[white]
                    pad:right-[10px] pad:h-[48px] pad:w-[48px] pad:rounded-[24px]
                    `}
                >
                    <ScrollTopIcon />
                </div>
            </div>
        </div>
    );
}
export default ScrollTop;