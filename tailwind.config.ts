import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontFamily: { serif: ['Roboto'], display: ['Bebas Neue'] },
		screens: {
			xs: '250px',
			sm: '350px',
			md: '600px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			colors: {
				primary: '#000000',
				secondary: {
					100: '#2C2C2C',
					200: '#1A1A1A',
					300: '#121212',
					400: '#FFFFFFB3',
				},
				accent: {
					100: '#E50914',
					200: '#5799EF',
					300: '#18B7D9',
				},
				neutral: '#FFFFFF',
			},
			aspectRatio: {
				poster: '2 / 3',
			},
		},
	},
	plugins: [],
};
export default config;
