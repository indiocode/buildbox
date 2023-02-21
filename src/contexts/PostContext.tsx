/* eslint-disable no-unused-vars */
import type { ReactElement, ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import type { NewPostForm, Post } from '~/models/Post';

interface PostsContextType {
	posts: Post[];
	addNewPost: (post: NewPostForm) => void;
	removePost: (post: Post) => void;
}

export const PostsContext = createContext({} as PostsContextType);

interface PostProviderProps {
	children: ReactNode;
}

const STORATE_KEY = '@BUILD_BOX:POSTS:1.0.0';

export function PostsProvider({ children }: PostProviderProps): ReactElement {
	const [posts, setPosts] = useState<Post[]>(() => {
		const storedStateAsJSON = localStorage.getItem(STORATE_KEY);
		if (!storedStateAsJSON) return [];
		return JSON.parse(storedStateAsJSON);
	});

	function addNewPost(post: NewPostForm): void {
		const newPost: Post = {
			id: uuidv4(),
			autor: {
				name: post.name,
				image: {
					url: post.image,
				},
			},
			message: post.message,
		} as Post;

		setPosts([newPost, ...posts]);
	}

	function removePost(post: Post): void {
		setPosts((state) => state.filter((item) => item.id !== post.id));
	}

	useEffect(() => {
		const stateJSON = JSON.stringify(posts);
		localStorage.setItem(STORATE_KEY, stateJSON);
	}, [posts]);

	return (
		<PostsContext.Provider
			value={{
				posts,
				addNewPost,
				removePost,
			}}
		>
			{children}
		</PostsContext.Provider>
	);
}
