import { forwardRef } from "react";

import { Slot } from "@ui/Slot";
import styles from "./Button.module.scss";

const Button = forwardRef(({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const combinedClassName = [styles.button, styles[variant], styles[`size-${size}`], className].filter(Boolean).join(" ");

    const Comp = asChild ? Slot : "button";

    return <Comp className={combinedClassName} ref={ref} {...props} />;
});

Button.displayName = "Button";

export default Button;
