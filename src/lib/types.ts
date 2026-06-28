export type Categories = string;

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	tags?: string[];
	published: boolean;
	readingTime?: string;
};
