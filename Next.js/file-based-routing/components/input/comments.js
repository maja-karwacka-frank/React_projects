import { useEffect, useState, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

const Comments = (props) => {
	const { eventId } = props;

	const notificationCtx = useContext(NotificationContext);

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const [isFetchingComments, setIsFetchingComments] = useState(false);

	useEffect(() => {
		if (showComments) {
			setIsFetchingComments(true);
			fetch('/api/comments/' + eventId)
				.then((res) => res.json())
				.then((data) => {
					setComments(data.comments);
					setIsFetchingComments(false);
				});
		}
	}, [showComments]);

	const toggleCommentsHandler = () => {
		setShowComments((prevStatus) => !prevStatus);
	};

	const addCommentHandler = (commentData) => {
		notificationCtx.showNotification({
			title: 'Sending comment...',
			message: 'Your comment is currently being stored into a database.',
			status: 'pending',
		});

		fetch('/api/comments/' + eventId, {
			method: 'POST',
			body: JSON.stringify(commentData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(async (res) => {
				if (res.ok) {
					return res.json();
				}

				return res.json().then((data) => {
					throw new Error(data.message || 'Something went wrong!');
				});
			})
			.then((data) => {
				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Your comment was saved!',
					status: 'success',
				});
			})
			.catch((error) => {
				notificationCtx.showNotification({
					title: 'Error',
					message: error.message || 'Something went wrong',
					status: 'error',
				});
			});
	};

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? 'Hide' : 'Show'} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && !isFetchingComments && <CommentList items={comments} />}
			{showComments && isFetchingComments && <p>Loading...</p>}
		</section>
	);
};

export default Comments;
