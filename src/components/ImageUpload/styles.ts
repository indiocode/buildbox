import styled from 'styled-components';

export const ImageUploadContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;

	button {
		background: transparent;
		border: 0;
		cursor: pointer;
		line-height: 0;
	}
`;

export const ImageContainer = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 88px;
	height: 88px;
	border-radius: 36px;
	border: solid 1px ${({ theme }) => theme['greyish-brown-three']};

	input {
		display: none;
		visibility: hidden;
	}

	img {
		border-radius: 36px;
		max-height: 100%;
		object-fit: contain;
	}
`;
