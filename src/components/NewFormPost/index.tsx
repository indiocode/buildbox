import {
	Button,
	FormFooter,
	Input,
	NewFormPostContainer,
	Textarea,
} from './styles';

export function NewFormPost() {
	return (
		<NewFormPostContainer>
			<Input placeholder="Digite seu nome" />
			<Textarea placeholder="Mensagem" />
			<FormFooter>
				<Button variant="primary">Descartar</Button>
				<Button variant="secondary">Publicar</Button>
			</FormFooter>
		</NewFormPostContainer>
	);
}
