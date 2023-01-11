const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		styled: true,
		themes: [
		  {
			mytheme: {
			  "primary": "#7d180a",
			  "secondary": "#101010",
			  "accent": "#513448",
			  "neutral": "#5b1107",
			  "base-100": "#f7e5cf",
			  "info": "#8ba2c6",
			  "success": "#8fb994",
			  "warning": "#E3D664",
			  "error": "#964231",
			},
		  },
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
	  },
};

module.exports = config;
