import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import styles from "./CustomCursor.module.scss";

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    // Dot is very snappy, ring is slightly looser for trailing effect
    const dotSpringConfig = { damping: 25, stiffness: 700, mass: 0.5 };
    const ringSpringConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    
    const dotXSpring = useSpring(cursorX, dotSpringConfig);
    const dotYSpring = useSpring(cursorY, dotSpringConfig);
    
    const ringXSpring = useSpring(cursorX, ringSpringConfig);
    const ringYSpring = useSpring(cursorY, ringSpringConfig);

    const [cursorState, setCursorState] = useState("default"); // 'default', 'hover', 'text', 'click', 'hover-click'
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest("a, button, input, textarea, select, [role='button']")) {
                setCursorState("hover");
            } else if (e.target.closest("p, h1, h2, h3, h4, h5, h6, span")) {
                setCursorState("text");
            } else {
                setCursorState("default");
            }
        };

        const handleMouseDown = () => {
            setCursorState((prev) => {
                if (prev === "hover") return "hover-click";
                if (prev === "text") return "text-click";
                return "click";
            });
        };

        const handleMouseUp = (e) => {
             if (e.target.closest("a, button, input, textarea, select, [role='button']")) {
                 setCursorState("hover");
             } else if (e.target.closest("p, h1, h2, h3, h4, h5, h6, span")) {
                 setCursorState("text");
             } else {
                 setCursorState("default");
             }
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", () => setIsVisible(true));

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", () => setIsVisible(true));
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    // Advanced Dot Animations
    const dotVariants = {
        default: { scale: 1, opacity: 1, borderRadius: "50%", width: 8, height: 8 },
        hover: { scale: 0, opacity: 0 },
        "hover-click": { scale: 0, opacity: 0 },
        text: { scale: 1, opacity: 0.7, borderRadius: "2px", width: 4, height: 24 }, // Morph into a text caret!
        "text-click": { scale: 0.9, opacity: 1, borderRadius: "2px", width: 4, height: 24 }, // Slight squeeze when selecting text
        click: { scale: 0.5, opacity: 1, borderRadius: "50%", width: 8, height: 8 }
    };

    // Advanced Ring Animations
    const ringVariants = {
        default: { scale: 1, backgroundColor: "transparent", borderColor: "rgba(100, 108, 255, 0.5)" },
        hover: { scale: 1.8, backgroundColor: "rgba(100, 108, 255, 0.15)", borderColor: "rgba(100, 108, 255, 0)" },
        "hover-click": { scale: 1.4, backgroundColor: "rgba(100, 108, 255, 0.3)", borderColor: "rgba(100, 108, 255, 0)" },
        text: { scale: 0.5, opacity: 0 }, // Hide ring on text
        "text-click": { scale: 0.5, opacity: 0 }, // Keep it hidden when selecting text
        click: { scale: 0.8, backgroundColor: "rgba(100, 108, 255, 0.2)", borderColor: "rgba(100, 108, 255, 0.8)" }
    };

    return (
        <>
            <motion.div
                className={styles.cursorDot}
                style={{ x: dotXSpring, y: dotYSpring }}
                variants={dotVariants}
                animate={cursorState}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            />
            <motion.div
                className={styles.cursorRing}
                style={{ x: ringXSpring, y: ringYSpring }}
                variants={ringVariants}
                animate={cursorState}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </>
    );
};

export default CustomCursor;
