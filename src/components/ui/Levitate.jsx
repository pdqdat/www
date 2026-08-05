import { motion } from "motion/react";

const Levitate = ({ children, delay = 0, yOffset = -15, duration = 6 }) => {
    return (
        <motion.div
            animate={{ y: [0, yOffset, 0] }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
            }}
            style={{ width: "100%", height: "100%" }}
        >
            {children}
        </motion.div>
    );
};

export default Levitate;
