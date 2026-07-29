import { motion } from "motion/react";

import styles from "./BackgroundOrb.module.scss";

const BackgroundOrb = () => {
    return (
        <motion.div
            className={styles.orb}
            animate={{
                scale: [1, 1.2, 1],
                x: [0, 100, -50, 0],
                y: [0, -100, 50, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    );
};

export default BackgroundOrb;
