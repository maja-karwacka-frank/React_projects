import React, { useContext, useEffect } from 'react';
import {
	Text,
	View,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

	useEffect(() => {
		getBlogPosts();

		const listener = navigation.addListener('focus', () => {
			getBlogPosts();
		});

		return () => {
			listener.remove();
		};
	}, []);

	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(post) => post.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate('Show', { id: item.id })}>
							<View style={styles.row}>
								<Text style={styles.title}>{item.title}</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather style={styles.icon} name='trash-2' />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
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
