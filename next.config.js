/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgbb.com',
            },
            {
                protocol: 'https',
                hostname: '**.githubusercontent.com',
                // loader: 'custom',
                // loaderFile: './my-loader.ts',
            },
        ],
        unoptimized: true,
    },
    output: "export",
    distDir: 'dist',

}

module.exports = nextConfig
