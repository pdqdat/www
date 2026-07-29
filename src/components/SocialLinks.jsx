import { motion } from "motion/react";
import { SOCIAL_LINKS } from "@/config/socials";
import styles from "./SocialLinks.module.scss";

const SocialLinks = ({ delayStart = 0 }) => {
    return (
        <ul className={styles.socialGrid}>
            {SOCIAL_LINKS.map((link, index) => (
                <motion.li 
                    key={link.name}
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ delay: delayStart + (index * 0.1) }}
                >
                    <a href={link.url} target="_blank" rel="noreferrer">
                        {link.name}
                    </a>
                </motion.li>
            ))}
        </ul>
    );
};

export default SocialLinks;
