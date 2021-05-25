import React, { useState } from 'react'
import './SingleComment.css';
import { db } from '../service/firebase';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import LikeDislikes from './LikeDislikes';

function SingleComment(props) {

    const user = useSelector(selectUser);
    const [OpenReply, setOpenReply] = useState(false)
    const [CommentValue, setCommentValue] = useState("")

    const handleChange = (e)=>{
        setCommentValue(e.currentTarget.value);
    }

    const openReply = () => {
        setOpenReply(!OpenReply)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        db.collection('comments').add({
            uid: user.uid,
            responseTo: props.comment.id,
            writer: user.displayName,
            content: CommentValue,
            postId: props.postId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setCommentValue("")
        setOpenReply(!OpenReply)

    }
    

    return (
        <div className="comment">
            <p>{props.comment.data.writer}</p>
            <span>{props.comment.data.content}</span>
            <br/>
            <div className="likebox">
                <LikeDislikes comment commentId={props.comment.id}/>
                <span onClick={openReply} key="comment-basic-reply-to">답글</span>
            </div>
            
        {OpenReply &&
            <form>
                <input type="text" onChange={handleChange} value={CommentValue} placeholder="공개 답글 추가..."/>
                <br />
                {CommentValue &&
                    <button onClick={onSubmit}>답글</button>
                }
                {!CommentValue &&
                    <span>답글</span>
                }
            </form>
        }
        </div>
    )
}

export default SingleComment
