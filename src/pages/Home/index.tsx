import { Header } from '~/components/Header';
import { NewFormPost } from '~/components/NewFormPost';
import { HomeContainer } from './styles';

export function Home() {
	return (
		<HomeContainer>
			<Header />

			<NewFormPost />
		</HomeContainer>
	);
}
