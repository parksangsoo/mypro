import React, { useEffect, useState } from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import './LikeDislikes.css';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { db } from '../service/firebase';

function LikeDislikes(props) {

    const [Likes, setLikes] = useState(0)
    const [Dislikes, setDislikes] = useState(0)
    const [LikeAction, setLikeAction] = useState(null)
    const [DislikeAction, setDislikeAction] = useState(null)
    const user = useSelector(selectUser);

    useEffect(() => {

        db.collection("like").where("commentId","==",props.commentId)
        .get()
        .then((querySnapshot) => {
            setLikes(querySnapshot.docs.length)

            querySnapshot.docs.map(like => {
                if (like.userId === props.userId) {
                    setLikeAction('liked')
                }
            })
        })

        db.collection("dislike").where("commentId","==",props.commentId)
        .get()
        .then((querySnapshot) => {
            setDislikes(querySnapshot.docs.length)

            querySnapshot.docs.map(like => {
                if (like.userId === props.userId) {
                    setDislikeAction('disliked')
                }
            })
        })
    
    }, [])

    const onLike = () => {

        if (LikeAction === null) {

            db.collection('like').add({
                uid: user.uid,
                commentId: props.commentId,
            });

            setLikes(Likes + 1)
            setLikeAction('liked')

            if (DislikeAction !== null) {
                setDislikeAction(null)
                setDislikes(Dislikes - 1)
            }

        } else {

            db.collection("like").where("commentId","==",props.commentId)
                .get()
                .then((querySnapshot) => {
                    db.collection('like').doc(querySnapshot.docs[0].id).delete();
                })

            setLikes(Likes - 1)
            setLikeAction(null)
        }
    }


    const onDisLike = () => {
        if (DislikeAction !== null) {
            db.collection("dislike").where("commentId","==",props.commentId)
                .get()
                .then((querySnapshot) => {
                    db.collection('dislike').doc(querySnapshot.docs[0].id).delete();
                })

            setDislikes(Dislikes - 1)
            setDislikeAction(null)
            

        } else {

            db.collection('dislike').add({
                uid: user.uid,
                commentId: props.commentId,
            });

            setDislikes(Dislikes + 1)
            setDislikeAction('disliked')

            if(LikeAction !== null ) {
                setLikeAction(null)
                setLikes(Likes - 1)
            }


        }
    }

    return (
        <>
            <span key="comment-basic-like">
                <Tooltip title="Like">
                    <ThumbUpIcon fontSize="small" onClick={onLike} />
                </Tooltip>
                <span className="likecount">{Likes}</span>
            </span>&nbsp;&nbsp;
            <span key="comment-basic-dislike">
                <Tooltip title="Dislike">
                    <ThumbDownIcon fontSize="small" onClick={onDisLike}
                    />
                </Tooltip>
                <span className="likecount">{Dislikes}</span>
            </span>
        </>
    )
}

export default LikeDislikes
