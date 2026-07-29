import { motion } from "motion/react";
import { Link } from "react-router";

import PageTitle from "@comp/PageTitle";
import Button from "@/components/ui/Button";

const NotFoundPage = () => {
    return (
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <PageTitle title="404 Not Found 😕" />

            <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                style={{ fontSize: "6rem", margin: 0, color: "var(--color-primary)" }}
            >
                404
            </motion.h1>
            <motion.h3
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
                style={{ marginBottom: "2rem" }}
            >
                Oops! The page you're looking for doesn't exist.
            </motion.h3>
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.6 }}
            >
                <Button asChild>
                    <Link to="/">Take Me Home</Link>
                </Button>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
