import nextConfig from 'eslint-config-next/core-web-vitals';

// Installed agent skills ship their own scripts; they aren't site code.
const config = [{ ignores: ['.claude/**', '.agents/**', '.taste-skill/**'] }, ...nextConfig];

export default config;
