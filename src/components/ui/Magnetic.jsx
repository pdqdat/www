import { useRef, useState } from "react";
import { motion } from "motion/react";

const Magnetic = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        
        // Calculate distance from center of the element
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        // Pull strength (adjust to control how far it stretches)
        setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    // Snappy physics for the magnetic pull and release
    const springConfig = { type: "spring", stiffness: 150, damping: 15, mass: 0.1 };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={springConfig}
            style={{ display: "inline-block", position: "relative" }}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;
