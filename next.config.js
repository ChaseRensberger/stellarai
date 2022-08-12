/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	firestore: {
		enablePersistence: true,
		// emulatorPort: process.env.NODE_ENV !== 'production' ? 8080 : undefined,
		// emulatorHost: 'localhost'
	},
};

module.exports = nextConfig;
