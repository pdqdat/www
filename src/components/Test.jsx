import Button from "@/components/ui/Button";
import PageTitle from "@comp/PageTitle";
import { motion } from "motion/react";

const variants = ["default", "destructive", "outline", "secondary", "ghost", "link"];
const sizes = ["default", "sm", "lg", "icon"];

const Test = () => {
    return (
        <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
            <PageTitle title="Button Showcase" />
            
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }}>
                Button Showcase
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <h2>Variants (Default Size)</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
                    {variants.map(variant => (
                        <Button key={variant} variant={variant}>
                            {variant.charAt(0).toUpperCase() + variant.slice(1)}
                        </Button>
                    ))}
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <h2>Sizes (Default Variant)</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center", marginTop: "1rem" }}>
                    {sizes.map(size => (
                        <Button key={size} size={size}>
                            {size === "icon" ? "+" : size.toUpperCase()}
                        </Button>
                    ))}
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <h2>As Child (HTML Anchor tag)</h2>
                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                    <Button asChild variant="outline">
                        <a href="#test">Clicking me acts like a link</a>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default Test;
