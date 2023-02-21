import { TrashSimple } from 'phosphor-react';
import type { ChangeEvent, ReactElement } from 'react';
import { useRef } from 'react';
import { useFormContext } from 'react-hook-form';

import { ImageDefault } from '~/assets';

import { ImageContainer, ImageUploadContainer } from './styles';

export function ImageUpload(): ReactElement {
	const { register, setValue, watch } = useFormContext();

	const inputRef = useRef<HTMLInputElement>(null);

	function handleImageContainerClick(): void {
		inputRef.current?.click();
	}

	const image = watch('image');

	function handleUploadImage(event: ChangeEvent<HTMLInputElement>): void {
		setValue('image', URL.createObjectURL(event.target.files![0]));
	}

	function handleRemoveUploadImage(): void {
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
