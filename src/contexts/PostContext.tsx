/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useEffect, useState } from 'react';
import { NewPostForm, Post } from '~/models/Post';
import { v4 as uuidv4 } from 'uuid';

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

export function PostsProvider({ children }: PostProviderProps) {
	const [posts, setPosts] = useState<Post[]>(() => {
		const storedStateAsJSON = localStorage.getItem(STORATE_KEY);
		if (!storedStateAsJSON) return [];
		return JSON.parse(storedStateAsJSON);
	});

	function addNewPost(post: NewPostForm) {
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

	function removePost(post: Post) {
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
