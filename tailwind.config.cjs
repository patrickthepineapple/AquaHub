/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#4CA9FF',
				secondary: '#BCD7FF',
				success: '#BCD7FF',
				warning: '#BCD7FF',
				error: '#BCD7FF',
				neutral: '#F3F4F6',
				white: '#FAFAFA',
				black: '#1C1F21',
			},
			gridTemplateColumns: {
				projects: 'repeat(auto-fill,minmax(340px, 1fr))',
			},
			gridTemplateRows: {
				projects: 'repeat(auto-fill,minmax(1fr))',
			},
			maxWidth: {
				landing: '1200px',
				projects: '1500px',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
