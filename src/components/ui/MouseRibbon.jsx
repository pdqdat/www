import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import styles from "./MouseRibbon.module.scss";

const MouseRibbon = ({ text = "DAT PHAN • WEB DEVELOPER • " }) => {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);

    // Loose spring for the trailing ribbon effect
    const springConfig = { damping: 40, stiffness: 80, mass: 2 };
    const ribbonX = useSpring(mouseX, springConfig);
    const ribbonY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div 
            className={styles.ribbonWrapper}
            style={{ x: ribbonX, y: ribbonY }}
        >
            <motion.div
                className={styles.rotater}
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 100 100" className={styles.svg}>
                    <path
                        id="circlePath"
                        d="M 50, 50
                           m -40, 0
                           a 40,40 0 1,1 80,0
                           a 40,40 0 1,1 -80,0"
                        fill="transparent"
                    />
                    <text>
                        <textPath href="#circlePath" startOffset="0" className={styles.text}>
                            {text}
                        </textPath>
                    </text>
                </svg>
            </motion.div>
        </motion.div>
    );
};

export default MouseRibbon;
