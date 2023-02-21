/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const HomeContainer = styled.div`
	padding-bottom: 5rem;
`;

export const Posts = styled.main`
	margin: 3.4375rem auto 0;
	max-width: 32.25rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h1 {
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.29;
		color: ${({ theme }) => theme['warm-grey-two']};
		font-size: 14px;
		margin-bottom: 0.5rem;
	}
`;

export const NewFormPostContainer = styled.form`
	margin: 0 auto;
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	max-width: 32.25rem;
	width: 100%;
	margin-top: calc(5.8125rem + 2.5625rem);
	border: 1px solid ${({ theme }) => theme['greyish-brown-two']};
	background-color: ${({ theme }) => theme['black-three']};
	border-radius: 3px;
`;
