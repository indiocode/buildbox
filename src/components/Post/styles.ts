/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const PostContainer = styled.div`
	border: 1px solid ${({ theme }) => theme['greyish-brown-two']};
	background-color: ${({ theme }) => theme['black-three']};
	padding: 3.5rem 1.5rem 2rem;
	position: relative;

	button {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		border: 0;
		background: transparent;
		cursor: pointer;
		line-height: 0;
	}
`;
export const PostContent = styled.div`
	display: flex;
	gap: 2rem;

	img {
		width: 100%;
		height: 100%;
		max-width: 5.5rem;
		max-height: 5.5rem;
		object-fit: contain;
		border-radius: 36px;
	}
`;

export const PostText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	p {
		line-height: 1.25;
		color: ${({ theme }) => theme['warm-grey-three']};
		text-align: left;
	}
`;

export const AuthorPost = styled.div`
	display: flex;
	flex-direction: column;

	span:first-child {
		font-size: 0.75rem;
		font-weight: 500;
		line-height: 1.33;
		color: ${({ theme }) => theme['brownish-grey']};
	}

	span:last-child {
		font-size: 0.875rem;
		line-height: 1.29;
		color: ${({ theme }) => theme['warm-grey-two']};
	}
`;
