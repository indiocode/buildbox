import { TrashSimple } from 'phosphor-react';
import { ChangeEvent, createRef, useState } from 'react';
import { ImageDefault } from '~/assets';
import { ImageUploadContainer, ImageContainer } from './styles';

export function ImageUpload() {
	const [image, setImage] = useState<string | null>(null);
	const fileInputRef = createRef<HTMLInputElement>();

	function handleUploadImage(event: ChangeEvent<HTMLInputElement>) {
		setImage(URL.createObjectURL(event.target.files![0]));
	}

	function handleRemoveUploadImage() {
		URL.revokeObjectURL(image as string);
		setImage(null);
		fileInputRef.current!.value = '';
	}

	function handleClick() {
		fileInputRef.current!.click();
	}

	return (
		<ImageUploadContainer>
			<ImageContainer onClick={handleClick}>
				<input
					type="file"
					accept="image/*"
					ref={fileInputRef}
					onChange={handleUploadImage}
				/>
				{/* <img src={(image as string) || 'https://picsum.photos/88'} /> */}
				<img src={(image as string) || ImageDefault} />
			</ImageContainer>

			{image && (
				<button onClick={handleRemoveUploadImage}>
					<TrashSimple
						size={18}
						color="#d65923"
					/>
				</button>
			)}
		</ImageUploadContainer>
	);
}
