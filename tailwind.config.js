/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                customBlack: '#222222',
                customWhite: '#ffffff',
                primary: '#111A27',
                customMetalGreen: '#092C2B',
                secondary: '#105650',
                customCyan: '#4AB7E7',
                customEmerald: '#62D29D',
                customLightBlue: '#7CDAC5',
                customWhiteBlue: '#C2E6FF',
                customLightGray: '#E9EFE4',
                customDarkGray: '#1B1B1B',
                customSpace: '#112840',
            },
        },
    },
    plugins: []
}