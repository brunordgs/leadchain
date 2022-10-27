module.exports = {
	experimental: { images: { layoutRaw: true } },
	webpack: (config) => {
		config.experiments = { asyncWebAssembly: true };
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
		};
		return config;
	},
};
