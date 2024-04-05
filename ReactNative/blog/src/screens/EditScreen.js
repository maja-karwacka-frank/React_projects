import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ route, navigation }) => {
	const id = route.params.id;
	const { state, editBlogPost } = useContext(Context);
	const blogPost = state.find((blogPost) => blogPost.id === id);

	return (
		<BlogPostForm
			initialValues={{ title: blogPost.title, content: blogPost.content }}
			onSubmit={(title, content) => {
				editBlogPost(id, title, content, () => navigation.goBack());
			}}
		/>
	);
};

const styles = StyleSheet.create({});

export default EditScreen;
