import { dev } from '$app/environment';

export const title = 'Genta Shandi';
export const description = 'Mobile Developer';
export const author = 'Genta Shandi';
export const url = dev ? 'http://localhost:5173/' : 'gentashandi.com';
export const social = {
	github: 'https://github.com/geardy47',
	linkedin: 'https://linkedin.com/in/gentashandi/',
	email: 'mailto:gentashandi@gmail.com'
} as const;
export const rss = '/api/posts';
