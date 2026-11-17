import React from 'react';
import Post from './Post';

class Blog extends React.Component
{
	render()
	{
		return (
			<>
				{
					this.props.posts.map
					(
						post =>
						(
							<Post	key={post.id}
									id={ post.id }
									title={post.title}
									content={post.content}
									removePost={ this.props.removePost }
							/>
						)
					)
				}
			</>
		)
	}
}
export default Blog;