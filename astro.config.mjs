// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        starlight({
            title: 'Antigravity Garden',
            social: [
                { label: 'GitHub', icon: 'github', href: 'https://github.com/withastro/starlight' },
            ],
            sidebar: [
                {
                    label: '数字花园',
                    autogenerate: { directory: 'garden' },
                },
                {
                    label: '博客文章',
                    autogenerate: { directory: 'blog' },
                },
            ],
        }),
        mdx(),
        sitemap(),
    ],
});