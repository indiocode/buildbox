import type { ReactElement } from 'react';

import { HeaderContainer, Subtitle, Title } from './styles';

export function Header(): ReactElement {
	return (
		<HeaderContainer>
			<Title>buildbox</Title>
			<Subtitle>WEB CHALLENGE</Subtitle>
		</HeaderContainer>
	);
}
