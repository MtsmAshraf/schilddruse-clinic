import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    async headers() {
    return [{
        source: '/:path*',
        headers: [
            {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400'
            }
        ],
        images: {
            formats: ['image/avif', 'image/webp'],
            minimumCacheTTL: 86400, // Cache images for 24 hours
        }
    }];
    
  }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);