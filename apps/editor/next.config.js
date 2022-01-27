const withTM = require('next-transpile-modules')(['ui'])

module.exports = withTM({
	reactStrictMode: true,
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.glsl$/,
			use: 'raw-loader'
		})

		return config
	}
})
