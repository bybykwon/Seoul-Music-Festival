/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            mawWidth: {
                DEFAULT: '1340px',
            },
            px: {
                DEFAULT: '1rem',
                sm: '2rem',
                md: '4rem',
                lg: '6rem',
                xl: '8rem',
            },
        },
        extend: {
            colors: {
                maincolor: '#5b21b6',
                subcolor: '#4c1d95',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            animation: {
                'slide-up-down': 'slideUpDown 2s ease-in-out infinite',
                'slide-up': 'slideUp 1s ease-in-out',
                'scale-down': 'scaleDown 5s ease-in-out',
                'scale-up': 'scaleUp 3s ease-in-out',
            },
            keyframes: {
                slideUpDown: {
                    '0%': { transform: 'translateY(10px)', opacity: '1' },
                    '50%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(10px)', opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleDown: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0.8)' },
                },
                scaleUp: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.2)' },
                },
                screens: {
                    xs: '480px', // 새로운 브레이크포인트 추가
                    ssl: '500px', // 더 큰 브레이크포인트
                },
            },
        },
    },
    plugins: [],
};
// tailwind.config.js
