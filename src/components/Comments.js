import React, {useState} from 'react'
import './Comments.css';
import { db } from '../service/firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
import firebase from 'firebase';

function Comments(props) {
    const user = useSelector(selectUser);
    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        console.log(Comment);
        e.preventDefault();

        db.collection('comments').add({
            uid: user.uid,
            writer: user.displayName,
            content: Comment,
            postId: props.postId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setComment("")
    }

    return (
        <div className="commnets">
            <form>
                <input type="text" onChange={handleChange} value={Comment} placeholder="공개 댓글 추가..."/>
                <br/>
                <button onClick={onSubmit}>댓글</button>
            </form>
            <br/>
            <br/>
            <br/>
            {props.CommentLists && props.CommentLists.map((comment, index) => (
                (!comment.data.responseTo &&
                <>
                    <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                    <ReplyComment CommentLists={props.CommentLists} postId={props.postId} parentCommentId={comment.id} refreshFunction={props.refreshFunction} />
                </>
                ))
            )}
        </div>
    )
}

export default Comments
