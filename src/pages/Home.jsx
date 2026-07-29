import { motion } from "motion/react";

import styles from "./Home.module.scss";
import PageTitle from "@comp/PageTitle";
import SocialLinks from "@comp/SocialLinks";
import DecodeText from "@/components/ui/DecodeText";

const App = () => {
    return (
        <>
            <PageTitle title="Dat Phan" />
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}>
                <DecodeText text="Dat Phan" />
            </motion.h1>
            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }} style={{ margin: "0.25rem auto" }}>
                Hello there! I&apos;m Dat Phan, an IT student from the{" "}
                <span className={styles.highlight}>University of Science, VNUHCM</span>.
            </motion.p>
            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }} style={{ margin: "0.25rem auto" }}>
                I&apos;m passionate about end-to-end development and creating user-friendly websites.
            </motion.p>
            <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}>
                Find me on <span className={styles.highlight}>socials</span>
            </motion.h3>
            <SocialLinks delayStart={1.0} />
            <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.4 }}
                style={{ marginTop: "3rem" }}
            >
                I'm still working on this <span className={styles.highlight}>portfolio</span>, so stay tuned for more{" "}
                <span className={styles.highlight}>updates</span>!
            </motion.h3>
        </>
    );
};

export default App;
