/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/browser/*.{html,js,ts,jsx,tsx}",
        "./src/browser/**/*.{html,js,ts,jsx,tsx}",
        "./index.html"
    ],
    theme: {
        extend: {
            screens: {
                'portrait': {'raw': '(orientation: portrait)'},
                'landscape': {'raw': '(orientation: landscape)'},
            }
        },
    },
    safelist: [
        "grid-cols-12",
        "grid-cols-20",
        "grid-cols-8",
        "grid-cols-50",
        "grid-cols-4",
        "grid-cols-100",
        {
            pattern: /grid-cols-./, // toutes les cols dynamiques
        }
    ],
    plugins: [],
}