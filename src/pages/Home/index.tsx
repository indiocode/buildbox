import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactElement } from 'react';
import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';

import { Header } from '~/components/Header';
import { NewFormPost } from '~/components/NewFormPost';
import { Post } from '~/components/Post';
import { PostsContext } from '~/contexts/PostContext';

import { HomeContainer, NewFormPostContainer, Posts } from './styles';

const newPostFormSchema = zod.object({
	name: zod.string().min(1),
	message: zod.string().min(1),
	image: zod.string().min(1),
});

export type NewPostFormInputs = zod.infer<typeof newPostFormSchema>;

export function Home(): ReactElement {
	const { posts, addNewPost } = useContext(PostsContext);

	const newPostForm = useForm<NewPostFormInputs>({
		resolver: zodResolver(newPostFormSchema),
	});

	const { handleSubmit, reset } = newPostForm;

	function handleNewPost(data: NewPostFormInputs): void {
		addNewPost(data);
		reset();
	}

	return (
		<HomeContainer>
			<Header />

			<FormProvider {...newPostForm}>
				<NewFormPostContainer onSubmit={handleSubmit(handleNewPost)}>
					<NewFormPost />
				</NewFormPostContainer>
			</FormProvider>

			<Posts>
				{posts.length > 0 && <h1>Feed</h1>}

				{!(posts.length > 0) && (
					<h1 style={{ textAlign: 'center' }}>
						Nenhuma ponstagem encontrada.{' '}
						<strong>Adicione uma nova postagem</strong>
					</h1>
				)}

				{posts.map((post) => (
					<Post
						key={post.id}
						post={post}
					/>
				))}
			</Posts>
		</HomeContainer>
	);
}
