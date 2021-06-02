module.exports = {
	purge: ["./**/*.html", "./**/*.js"],
	darkMode: false, // or 'media' or 'class'
	prefix: "tw-",
	important: true,
	theme: {
		extend: {
			height: {
				"screen-80": "80vh",
				"screen-50": "50vh",
			},
			transitionProperty: {
				height: "height",
				spacing: "margin, padding",
			},
			transitionDuration: {
				spacing: "margin, padding",
			},
		},
	},
	variants: {
		extend: {
			display: ["hover", "focus"],
			transitionProperty: ["hover", "focus"],
			transform: ["hover", "focus"],
		},
	},
	plugins: [],
};
