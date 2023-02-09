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
