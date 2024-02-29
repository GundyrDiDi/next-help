/*
 * @Author: shiguang
 * @Date: 2023-05-24 19:35:49
 * @LastEditors: shiguang
 * @LastEditTime: 2023-05-24 19:47:27
 * @Description: ElCarousel
 */

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel, CarouselProps } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { useRef } from 'react';
interface ElCarouselProps extends CarouselProps {}
const ElCarousel = (props: ElCarouselProps) => {
    const { children } = props;
    const carouselRef = useRef<CarouselRef | null>();
    const _children = Array.isArray(children) ? children : [children];
    return (
        <Carousel
            {...props}
            arrows={true}
            ref={(slider) => {
                carouselRef.current = slider;
            }}
            prevArrow={
                <div className="relative">
                    <div
                        className="relative left-[25px] rounded-[2px]  bg-[#00000085] w-[40px] h-[68px] flex justify-center items-center hover:bg-[rgba(0,0,0,.82)] cursor-pointer"
                        style={{
                            zIndex: 100
                        }}
                    >
                        <LeftOutlined className="text-white text-[30px]" />
                    </div>
                </div>
            }
            nextArrow={
                <div className="relative">
                    <div className="relative right-[45px] rounded-[2px] bg-[#00000085] w-[40px] h-[68px] flex justify-center items-center hover:bg-[rgba(0,0,0,.82)] cursor-pointer">
                        <RightOutlined className="text-white text-[30px] " />
                    </div>
                </div>
            }
        >
            {_children.map((item, key) => {
                return (
                    <div key={key} className="relative">
                        {item}
                    </div>
                );
            })}
        </Carousel>
    );
};
export default ElCarousel;
