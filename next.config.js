/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers() {
        return [
            {
                source: '/images/elections2024/cro.jpg',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-cache',
                    },
                ],
            },
            {
                source: '/images/elections2024/cro-ken.jpg',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'no-cache',
                    },
                ],
            },
        ]
    }
}

module.exports = nextConfig
