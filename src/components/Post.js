import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postAction';

function mapStateToProps(state) {
	return {
    posts: state.post.posts,
		newPost: state.post.newPost,
	};
}
class Post extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}
	render() {
		const posts = this.props.posts.map(post => {
			return (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
				</div>
			);
		});
		return (
			<div className="post">
				<hr />
				<h1>All Posts</h1>
				{posts}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	{ fetchPosts }
)(Post);
