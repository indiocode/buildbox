/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 5.8125rem;
	background-color: ${({ theme }) => theme['black-two']};
`;

export const BaseTextTitle = styled.span`
	font-family: 'SF Pro Display', sans-serif;
`;

export const Title = styled(BaseTextTitle)`
	font-size: 1.5rem;
	font-weight: 900;
	line-height: 1.21;
	color: ${({ theme }) => theme['dark-lime-green']};
`;

export const Subtitle = styled(BaseTextTitle)`
	font-size: 0.75rem;
	font-weight: 300;
	line-height: 1.17;
	color: ${({ theme }) => theme['warm-grey']};
`;
