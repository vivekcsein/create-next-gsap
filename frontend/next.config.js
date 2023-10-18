/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // images: {
    //     loader: 'custom',
    //     loaderFile: './my/image/loader.js',
    // },
}

module.exports = nextConfig
