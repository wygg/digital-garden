import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeObsidian from 'starlight-theme-obsidian';

export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeObsidian()],
			title: 'WYGG LifeOS',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }
			],
			sidebar: [
				{
					label: 'AI Echo (硅基回响)',
					autogenerate: { directory: '010-ai-echo' }
				},
				{
					label: 'Human Grit (碳基磨砺)',
					autogenerate: { directory: '020-human-grit' }
				},
				{
					label: 'Research (跨界研究)',
					autogenerate: { directory: '030-research' }
				}
			],
		}),
	],
});
