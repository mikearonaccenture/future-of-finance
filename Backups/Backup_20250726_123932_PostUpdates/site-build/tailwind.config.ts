import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                background: 'rgb(var(--background))',
                foreground: 'rgb(var(--foreground))',
            },
            animation: {
                'pulse-modern': 'pulse-modern 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'spin-modern': 'spin-modern 1s linear infinite',
            },
        },
    },
    plugins: [],
}
export default config 