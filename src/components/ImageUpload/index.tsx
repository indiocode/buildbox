import { TrashSimple } from 'phosphor-react';
import { ChangeEvent, createRef, useContext } from 'react';
import { ImageDefault } from '~/assets';
import { PostsContext } from '~/contexts/PostContext';
import { ImageUploadContainer, ImageContainer } from './styles';

export function ImageUpload() {
	const { setImageUrlToCurrentPost, removeImageUrlToCurrentPost, currentPost } =
		useContext(PostsContext);

	const fileInputRef = createRef<HTMLInputElement>();

	function handleUploadImage(event: ChangeEvent<HTMLInputElement>) {
		setImageUrlToCurrentPost(URL.createObjectURL(event.target.files![0]));
	}

	function handleRemoveUploadImage() {
		URL.revokeObjectURL(currentPost?.autor.image.url as string);
		removeImageUrlToCurrentPost();
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
				<img src={currentPost?.autor.image.url || ImageDefault} />
			</ImageContainer>

			{currentPost?.autor.image.url && (
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
