import { useContext } from 'react';
import { Header } from '~/components/Header';
import { NewFormPost } from '~/components/NewFormPost';
import { Post } from '~/components/Post';
import { PostsContext } from '~/contexts/PostContext';
import { HomeContainer, Posts } from './styles';

export function Home() {
	const { posts } = useContext(PostsContext);
	return (
		<HomeContainer>
			<Header />

			<NewFormPost />

			<Posts>
				{posts.length > 0 && <h1>Feed</h1>}

				{posts.map((post) => (
					<Post
						key={post.id}
						post={post}
					/>
				))}
			</Posts>
		</HomeContainer>
	);
}
