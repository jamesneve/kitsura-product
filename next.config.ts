// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/api/event', destination: 'https://plausible.io/api/event' },
      {
        source: '/js/script.outbound-links.tagged-events.js',
        destination: 'https://plausible.io/js/script.outbound-links.tagged-events.js',
      },
    ];
  },
};

export default nextConfig;
