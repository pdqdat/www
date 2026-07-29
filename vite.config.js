import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": "/src",
            "@comp": "/src/components",
            "@ui": "/src/components/ui",
            "@pages": "/src/pages",
            "@hooks": "/src/hooks",
            "@utils": "/src/utils",
            "@assets": "/src/assets",
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @use "@/scss/utils" as *;
                `,
            },
        },
    },
});
