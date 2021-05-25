import React, {useState} from 'react'
import './Comments.css';
import { db } from '../service/firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';
import firebase from 'firebase';
import { useHistory } from "react-router-dom";

function Comments(props) {
    let history = useHistory();

    const user = useSelector(selectUser);
    const [Comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value)
    }

    const onSubmit = (e) => {

        if(!user){
            alert("로그인 후 입력해주세요!");
            return history.replace('/login')
        }

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
                {Comment &&
                    <button onClick={onSubmit}>댓글</button>
                }
                {!Comment &&
                    <span>댓글</span>
                }
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
