/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useState } from 'react';
import { NewPostForm, Post } from '~/models/Post';
import { v4 as uuidv4 } from 'uuid';

interface PostsContextType {
	currentPost: Post | null;
	posts: Post[];
	setImageUrlToCurrentPost: (url: string) => void;
	removeImageUrlToCurrentPost: () => void;
	addNewPost: (post: NewPostForm) => void;
	removePost: (post: Post) => void;
}

export const PostsContext = createContext({} as PostsContextType);

interface PostProviderProps {
	children: ReactNode;
}

export function PostsProvider({ children }: PostProviderProps) {
	const [posts, setPosts] = useState<Post[]>([]);
	const [currentPost, setCurrentPost] = useState<Post | null>(null);

	function addNewPost(post: NewPostForm) {
		const newPost: Post = {
			...currentPost,
			id: uuidv4(),
			autor: {
				...currentPost?.autor,
				name: post.name,
			},
			message: post.message,
		} as Post;

		setCurrentPost(null);

		setPosts([newPost, ...posts]);
	}

	function setImageUrlToCurrentPost(url: string) {
		setCurrentPost(
			(state) =>
				({
					...state,
					autor: {
						image: {
							url,
						},
					},
				} as Post),
		);
	}

	function removeImageUrlToCurrentPost() {
		setCurrentPost(
			(state) =>
				({
					...state,
					autor: {
						image: {
							url: null,
						},
					},
				} as Post),
		);
	}

	function removePost(post: Post) {
		setPosts((state) => state.filter((item) => item.id !== post.id));
	}

	console.log({ currentPost, posts });

	return (
		<PostsContext.Provider
			value={{
				posts,
				addNewPost,
				currentPost,
				setImageUrlToCurrentPost,
				removeImageUrlToCurrentPost,
				removePost,
			}}
		>
			{children}
		</PostsContext.Provider>
	);
}
