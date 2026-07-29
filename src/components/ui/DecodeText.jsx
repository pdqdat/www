import { useEffect, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#_";

const DecodeText = ({ text }) => {
    const [decodedText, setDecodedText] = useState(text);

    useEffect(() => {
        let iteration = 0;
        let interval = null;
        
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                setDecodedText(
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            if (letter === " ") return " ";
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        }, 300);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text]);

    return <span>{decodedText}</span>;
};

export default DecodeText;
