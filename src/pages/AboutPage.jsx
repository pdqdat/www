import { motion } from "motion/react";

import PageTitle from "@comp/PageTitle";
import SocialLinks from "@comp/SocialLinks";
import styles from "./AboutPage.module.scss";

const AboutPage = () => {
    return (
        <>
            <PageTitle title="About Dat Phan" />
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}>
                About Dat Phan
            </motion.h1>
            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}>
                An IT student from University of Science, VNUHCM
                <br />
                Based in HCMC
            </motion.p>
            <motion.h3 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}>
                Dat Phan on <span className={styles.highlight}>Socials</span>
            </motion.h3>
            <SocialLinks delayStart={0.8} />
        </>
    );
};

export default AboutPage;
