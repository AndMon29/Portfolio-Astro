import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	// Tailwind's preflight is disabled so it doesn't reset the site's existing global.css
	integrations: [react(), tailwind({ applyBaseStyles: false })],
});
