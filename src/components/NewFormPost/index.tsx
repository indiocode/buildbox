import { Button, FormFooter, Input, Textarea } from './styles';
import { ImageUpload } from '../ImageUpload';
import { useFormContext } from 'react-hook-form';

export function NewFormPost() {
	const { register, watch, reset } = useFormContext();

	const isValidForm =
		watch('name')?.length > 0 && watch('message')?.length > 0 && watch('image');

	const isPartialValidForm =
		watch('name')?.length > 0 || watch('message')?.length > 0 || watch('image');

	function handleResetForm() {
		reset();
	}

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
					formValid={isPartialValidForm}
					onClick={handleResetForm}
				>
					<s>Descartar</s>
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
