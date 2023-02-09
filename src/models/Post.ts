import { Author } from './Author';

export interface Post {
	id: string;
	message: string;
	autor: Author;
}

export interface NewPostForm {
	message: string;
	name: string;
	image: string;
}
