module.exports = {
	purge: ["./public/**/*.html", "./public/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	prefix: "tw-",
	important: true,
	theme: {
		extend: {
			height: {
				"screen-80": "80vh",
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
			transitionProperty: ["hover", "focus"],
		},
	},
	plugins: [],
};
