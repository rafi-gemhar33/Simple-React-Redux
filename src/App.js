import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import Post from './components/Post';
import PostForm from './components/PostForm';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<h1>All Posts</h1>
					<PostForm />
					<hr />
					<Post />
				</header>
			</div>
		</Provider>
	);
}

export default App;
