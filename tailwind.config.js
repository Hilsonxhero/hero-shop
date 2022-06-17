module.exports = {
    content: [
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'design-base': '0px 2px 14px #0000001a'
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1rem",
                lg: "2rem",
                xl: "2rem",
                "2xl": "2rem",
            },
            screens: {
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
        },

    },
    plugins: [],
    important: true,
}