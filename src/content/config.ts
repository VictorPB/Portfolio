import { defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
});

export const collections = {
  'posts': postsCollection,
};
