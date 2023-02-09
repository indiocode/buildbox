/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useState } from 'react';
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

export function PostsProvider({ children }: PostProviderProps) {
	const [posts, setPosts] = useState<Post[]>([]);

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

	console.log({ posts });

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
