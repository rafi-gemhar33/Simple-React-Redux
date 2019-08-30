import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPosts } from '../actions/postAction';

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			body: '',
		};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	submitArticle = e => {
		e.preventDefault();
		const post = {
			title: this.state.title,
			body: this.state.body,
		};
		this.props.createPosts(post);
	};
	render() {
		return (
			<div className="postform">
				<h2>ADD POST</h2>
				<form>
					<div className="inputrow">
						<label>Title</label>
						<input
							className="input-item"
							type="text"
							name="title"
							value={this.state.title}
							onChange={this.handleChange}
						/>
					</div>
					<div className="inputrow article-body">
						<label>Body</label>
						<textarea
							className="input-item"
							type="text"
							name="body"
							rows="5"
							value={this.state.body}
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<button onClick={this.submitArticle}>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.post.posts,
		newPost: state.post.newPost,
	};
}

export default connect(
	mapStateToProps,
	{ createPosts }
)(PostForm);
