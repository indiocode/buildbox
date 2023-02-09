import { XCircle } from 'phosphor-react';
import { useContext } from 'react';
import { PostsContext } from '~/contexts/PostContext';
import { Post as PostModel } from '~/models/Post';
import { AuthorPost, PostContainer, PostContent, PostText } from './styles';

interface PostProps {
	post: PostModel;
}

export function Post({ post }: PostProps) {
	const { removePost } = useContext(PostsContext);

	function handleRemovePost() {
		removePost(post);
	}

	return (
		<PostContainer>
			<button onClick={handleRemovePost}>
				<XCircle
					size={20}
					color="#d65923"
				/>
			</button>
			<PostContent>
				<img
					src={post.autor.image.url as string}
					alt={`Image profile from ${post.autor.name}`}
					loading="lazy"
				/>
				<PostText>
					<p>{post.message}</p>

					<AuthorPost>
						<span>Enviado por</span>
						<span>{post.autor.name}</span>
					</AuthorPost>
				</PostText>
			</PostContent>
		</PostContainer>
	);
}
