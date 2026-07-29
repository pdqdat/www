import { cloneElement, forwardRef, isValidElement, Children } from "react";

const mergeProps = (slotProps, childProps) => {
    const overrideProps = { ...childProps };

    for (const propName in childProps) {
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];

        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args) => {
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = { ...slotPropValue, ...childPropValue };
        } else if (propName === "className") {
            overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
        }
    }

    return { ...slotProps, ...overrideProps };
};

export const Slot = forwardRef(({ children, ...props }, ref) => {
    if (isValidElement(children)) {
        return cloneElement(children, {
            ...mergeProps(props, children.props),
            ref: (node) => {
                if (ref) {
                    if (typeof ref === "function") ref(node);
                    else ref.current = node;
                }
                if (children.ref) {
                    if (typeof children.ref === "function") children.ref(node);
                    else children.ref.current = node;
                }
            },
        });
    }

    if (Children.count(children) > 1) {
        Children.only(null); // Throw standard React error if multiple children passed
    }

    return null;
});

Slot.displayName = "Slot";
