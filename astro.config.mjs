// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://digital-garden-nine-alpha.vercel.app',
    integrations: [
        starlight({
            title: 'Antigravity Garden',
            locales: {
                root: {
                    label: '简体中文',
                    lang: 'zh-CN',
                },
                en: {
                    label: 'English',
                    lang: 'en',
                },
            },
            social: [
                { label: 'GitHub', icon: 'github', href: 'https://github.com/withastro/starlight' },
            ],
            sidebar: [
                {
                    label: '数字花园',
                    translations: {
                        en: 'Digital Garden',
                    },
                    autogenerate: { directory: 'garden' },
                },
                {
                    label: '博客文章',
                    translations: {
                        en: 'Blog Posts',
                    },
                    autogenerate: { directory: 'blog' },
                },
            ],
        }),
        mdx(),
        sitemap(),
    ],
});