/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.resolve.fallback ??= {};
            config.resolve.fallback.os = false;
            config.resolve.fallback.fs = false;
            config.resolve.fallback.child_process = false;
            config.resolve.fallback.path = false;
        }
        return config;
    },
};

export default nextConfig;
