import { TrashSimple } from 'phosphor-react';
import { ChangeEvent, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { ImageDefault } from '~/assets';
import { ImageUploadContainer, ImageContainer } from './styles';

export function ImageUpload() {
	const { register, setValue, watch } = useFormContext();

	const inputRef = useRef<HTMLInputElement>(null);

	function handleImageContainerClick() {
		inputRef.current?.click();
	}

	const image = watch('image');

	function handleUploadImage(event: ChangeEvent<HTMLInputElement>) {
		setValue('image', URL.createObjectURL(event.target.files![0]));
	}

	function handleRemoveUploadImage() {
		URL.revokeObjectURL(image as string);
		setValue('image', '');
		inputRef.current!.value = '';
	}

	return (
		<ImageUploadContainer>
			<ImageContainer onClick={handleImageContainerClick}>
				<input
					{...register('image')}
					type="file"
					accept="image/*"
					ref={inputRef}
					onChange={handleUploadImage}
				/>
				<img src={image || ImageDefault} />
			</ImageContainer>

			{image && (
				<button onClick={handleRemoveUploadImage}>
					<TrashSimple
						size={20}
						color="#d65923"
					/>
				</button>
			)}
		</ImageUploadContainer>
	);
}
