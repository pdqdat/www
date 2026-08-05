import { motion } from "motion/react";

import PageTitle from "@comp/PageTitle";
import SocialLinks from "@comp/SocialLinks";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
    return (
        <section className={styles.contact}>
            <PageTitle
                title="Get in touch with Dat Phan 👋"
                description="Get in touch with Dat Phan for collaboration, freelance work, or just to say hi!"
            />

            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}>
                Get In Touch
            </motion.h1>

            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}>
                Feel free to reach out to me via email at:
            </motion.p>

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}>
                <a href="mailto:hi@datphan.net" className={styles.email}>
                    hi@datphan.net
                </a>
            </motion.div>

            <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.7 }}
                style={{ marginTop: "2rem" }}
            >
                Or find me on <span className={styles.highlight}>Socials</span>
            </motion.h3>

            <SocialLinks delayStart={0.9} />
        </section>
    );
};

export default ContactPage;
