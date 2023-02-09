import { Button, FormFooter, Input, Textarea } from './styles';
import { ImageUpload } from '../ImageUpload';
import { useFormContext } from 'react-hook-form';

export function NewFormPost() {
	const { register, watch } = useFormContext();

	const isValidForm =
		watch('name')?.length > 0 && watch('message')?.length > 0 && watch('image');

	return (
		<>
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
		</>
	);
}
