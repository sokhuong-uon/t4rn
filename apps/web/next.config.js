const withTM = require('next-transpile-modules')(['ui', '@immerse/core'])

module.exports = withTM({
	reactStrictMode: true,
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(glsl|frag|vert)$/,
			use: 'raw-loader'
		})

		return config
	}
})
