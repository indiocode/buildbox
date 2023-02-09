import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
	Button,
	FormFooter,
	Input,
	NewFormPostContainer,
	Textarea,
} from './styles';
import { ImageUpload } from '../ImageUpload';
import { useContext } from 'react';
import { PostsContext } from '~/contexts/PostContext';

const newPostFormSchema = zod.object({
	name: zod.string().min(1),
	message: zod.string().min(1),
});

type NewPostFormInputs = zod.infer<typeof newPostFormSchema>;

export function NewFormPost() {
	const { addNewPost } = useContext(PostsContext);

	const { register, watch, handleSubmit, reset } = useForm<NewPostFormInputs>({
		resolver: zodResolver(newPostFormSchema),
	});

	const isValidForm = watch('name')?.length > 0 && watch('message')?.length > 0;

	function handleNewPost(data: NewPostFormInputs) {
		addNewPost(data);
		reset();
	}

	return (
		<NewFormPostContainer onSubmit={handleSubmit(handleNewPost)}>
			<ImageUpload />

			<Input
				placeholder="Digite seu nome"
				{...register('name')}
			/>
			<Textarea
				placeholder="Mensagem"
				{...register('message')}
			/>
			<FormFooter>
				<Button
					variant="default"
					formValid={isValidForm}
				>
					Descartar
				</Button>
				<Button
					variant={!isValidForm ? 'primary' : 'secondary'}
					formValid={isValidForm}
				>
					Publicar
				</Button>
			</FormFooter>
		</NewFormPostContainer>
	);
}
