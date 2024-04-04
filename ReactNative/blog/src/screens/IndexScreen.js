import React, { useContext } from 'react';
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	Button,
	TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
	const { state, addBlogPost, deleteBlogPost } = useContext(Context);
	return (
		<View>
			<Button title='Add Post' onPress={addBlogPost} />
			<FlatList
				data={state}
				keyExtractor={(post) => post.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.title}>{item.title}</Text>
							<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
								<Feather style={styles.icon} name='trash-2' />
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderTopWidth: 1,
		borderColor: 'gray',
	},
	icon: {
		fontSize: 24,
	},
	title: {
		fontSize: 18,
	},
});

export default IndexScreen;
