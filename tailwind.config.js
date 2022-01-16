const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nutino', ...defaultTheme.fontFamily.sans],
                instagram: ['Rochester']
            },
            container: {
                center: true
            }
        }
    },
    plugins: []
};
