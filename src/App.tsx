import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<h1>Welvome to Web App React Vite Boilerplate</h1>
		</ThemeProvider>
	);
}
