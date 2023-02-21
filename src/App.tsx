import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { PostsProvider } from './contexts/PostContext';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';

export function App(): ReactElement {
	return (
		<ThemeProvider theme={defaultTheme}>
			<PostsProvider>
				<Home />
			</PostsProvider>
			<GlobalStyle />
		</ThemeProvider>
	);
}
