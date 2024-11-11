import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
    darkMode: "class",
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [nextui()],
} satisfies Config;
