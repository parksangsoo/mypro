import React, { useEffect, useState } from 'react'
import SingleComment from './SingleComment';
import './ReplyComment.css';

function ReplyComment(props) {

    const [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)

    useEffect(() => {

        let commentNumber = 0;
        props.CommentLists.map((comment) => {

            if (comment.data.responseTo === props.parentCommentId) {
                commentNumber++
            }
        })
        setChildCommentNumber(commentNumber)
    }, [props.CommentLists, props.parentCommentId])

    let renderReplyComment = (parentCommentId) =>
        props.CommentLists.map((comment, index) => (
            <>
                {comment.data.responseTo === parentCommentId &&
                    <div className="rrple">
                        <SingleComment comment={comment} postId={props.postId} refreshFunction={props.refreshFunction} />
                        <ReplyComment CommentLists={props.CommentLists} parentCommentId={comment.id} postId={props.postId} refreshFunction={props.refreshFunction} />
                    </div>
                }
            </>
        ))
    

    const handleChange = () => {
        setOpenReplyComments(!OpenReplyComments)
    }
    
    return (
        <div>
            {ChildCommentNumber > 0 && OpenReplyComments == false &&
                <p onClick={handleChange} >답글 {ChildCommentNumber}개 보기</p>
            }
            
            {ChildCommentNumber > 0 && OpenReplyComments == true &&
                <p onClick={handleChange} >답글 {ChildCommentNumber}개 숨기기</p>
            }

            {OpenReplyComments &&
                renderReplyComment(props.parentCommentId)
            }
        </div>
    )
}

export default ReplyComment
