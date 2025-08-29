/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static exports if needed for hosting
    // output: 'export', // Uncomment for static export

    // Optimize images
    images: {
        domains: ['localhost'],
        unoptimized: false, // Set to true for static export
    },

    // Security headers for production
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },

    // Performance optimizations
    experimental: {
        optimizePackageImports: ['lucide-react', 'recharts', 'framer-motion'],
    },

    // Webpack optimizations for charts and visualizations
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': './lib',
        };
        return config;
    },
};

module.exports = nextConfig; 