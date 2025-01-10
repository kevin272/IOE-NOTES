import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		semester: z.number().min(1).max(8),
		date: z.date(),
		description: z.string().optional(),
	}),
});

export const collections = {
	notes: notesCollection,
};