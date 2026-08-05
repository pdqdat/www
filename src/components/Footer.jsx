import { NavLink } from "react-router";
import { motion } from "motion/react";

import styles from "./Footer.module.scss";

const Footer = () => {
    const getLinkClass = ({ isActive }) => {
        return isActive ? `${styles.footer__link} ${styles.footer__link_active}` : styles.footer__link;
    };

    return (
        <motion.footer 
            className={styles.footer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            <nav className="wrapper" aria-label="Footer Navigation">
                <ul className={styles.footer__items}>
                    <li className={styles.footer__item}>
                        <NavLink to="/" className={getLinkClass}>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.footer__item}>
                        <NavLink to="/about" className={getLinkClass}>
                            About
                        </NavLink>
                    </li>
                    <li className={styles.footer__item}>
                        <NavLink to="/contact" className={getLinkClass}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </motion.footer>
    );
};

export default Footer;
