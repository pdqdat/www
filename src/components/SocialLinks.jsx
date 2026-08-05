import { motion } from "motion/react";

import { SOCIAL_LINKS } from "@/config/socials";
import Magnetic from "@ui/Magnetic";
import styles from "./SocialLinks.module.scss";

const SocialLinks = ({ delayStart = 0 }) => {
    return (
        <ul className={styles.socialGrid}>
            {SOCIAL_LINKS.map((link, index) => (
                <motion.li 
                    key={link.name}
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: delayStart + (index * 0.1) }}
                >
                    <Magnetic>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            style={{ display: "inline-block" }}
                        >
                            <a 
                                href={link.url} 
                                target="_blank" 
                                rel="noreferrer" 
                                aria-label={link.name}
                                className={styles.socialLink}
                            >
                                {link.name}
                            </a>
                        </motion.div>
                    </Magnetic>
                </motion.li>
            ))}
        </ul>
    );
};

export default SocialLinks;
