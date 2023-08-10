/** @type {import('next').NextConfig} */
// next.config.js
module.exports = {
    reactStrictMode: true, // Si deseas habilitar el modo estricto de React

    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next',
                    name: 'static/media/[name].[hash].[ext]',
                },
            },
        });

        if (!isServer) {
            // Soluciona un problema de CSR (Client-Side Rendering) con Next.js 11
            // https://github.com/vercel/next.js/issues/25454
            config.output.chunkFilename = isServer
                ? `${isServer ? '[name]' : 'static'}/chunks/[name].[contenthash].js`
                : `static/chunks/[name].[contenthash].js`;
        }

        return config;
    },
};



// module.exports = nextConfig
