import { defineCollection } from 'astro:content';

// 极其宽松的定义，避免任何 Schema 错误导致集合消失
const garden = defineCollection({});

// 保留原有的 blog 定义（如果需要的话，或者也置空）
const blog = defineCollection({});

export const collections = { blog, garden };
