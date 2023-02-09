import styled, { css } from 'styled-components';

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

const Pattern = css`
	padding: 0.75rem 1rem;
	font-size: 14px;
	line-height: 1.29;
	color: ${({ theme }) => theme['white']};
	border: 0;
	border-radius: 8px;
	background-color: ${({ theme }) => theme['greyish-brown']};
	max-width: 29.25rem;

	&::placeholder {
		color: ${({ theme }) => theme['warm-grey-three']};
	}
`;

export const Input = styled.input`
	${Pattern}
`;

export const Textarea = styled.textarea`
	${Pattern}
	height: 5rem;
	resize: none;
`;

export const FormFooter = styled.div`
	margin-top: 2rem;
	display: flex;
	justify-content: flex-end;
	gap: 0.5rem;
`;

const BUTTON_TYPE = {
	background: {
		default: 'transparent',
		primary: 'brownish-grey',
		secondary: 'dark-lime-green',
	},
	color: {
		default: 'brownish-grey',
		primary: 'black-three',
		secondary: 'white',
	},
} as const;

interface ButtonProps {
	variant: keyof typeof BUTTON_TYPE.background;
	formValid?: boolean;
}

export const Button = styled.button<ButtonProps>`
	max-width: 6.125rem;
	height: 2.5625rem;
	width: 100%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	border: 0;
	background-color: ${({ theme, variant }) =>
		theme[BUTTON_TYPE.background[variant]]};
	color: ${({ theme, variant }) => theme[BUTTON_TYPE.color[variant]]};

	${({ formValid }) =>
		!formValid &&
		css`
			cursor: not-allowed;
			pointer-events: none;
		`}
`;
