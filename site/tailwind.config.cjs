const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				display: ['Righteous', ...defaultTheme.fontFamily.sans],
				sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},

	plugins: []
};

module.exports = config;
