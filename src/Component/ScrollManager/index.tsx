import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props: any) => {
    // 获取当前页面
    const { section, onSectionChange } = props;
    const data = useScroll();//当前正在滚动到哪里的信息
    const lastScroll = useRef(0);
    const isAnimating = useRef(false)

    // 挂载定义动画(渐隐｜渐显)
    useEffect(() => {
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => {
                isAnimating.current = true;
            },
            onComplete: () => {
                isAnimating.current = false;
            }
        })
    }, [section, data.el])

    // 监测每帧，当符合条件时候触发改变onSectionChange状态
    useFrame(() => {
        if (isAnimating.current) {
            lastScroll.current = data.offset;
            return;
        }
        // 
        const curSection = Math.floor(data.offset * data.pages);
        // 当当前页面不是第一页
        if (data.offset > lastScroll.current && curSection === 0) {
            onSectionChange(1);
        }
        if (data.offset < lastScroll.current &&
            data.offset < 1 / (data.pages - 1)
        ) {
            onSectionChange(0)
        }
        lastScroll.current = data.offset
    })
    return (null)
}