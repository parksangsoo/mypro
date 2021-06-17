import React, { useState,useEffect } from 'react';
import Comments from '../components/Comments';
import CardInfo from '../components/CardInfo';
import './CardDetail.css';
import axios from 'axios';
import { db } from '../firebase';

const CardDetail = (props) => {

    let cardId = props.match.params.cardId
    const [Card, setCard] = useState("")
    const [Image, setImage] = useState("")
    const [CommentLists, setCommentLists] = useState([])

    useEffect(() => {

        const getCard = async() => {
            try{
                const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=id:${cardId}`,{
                    headers:{
                        'X-Api-Key': 'd5900a50-ff94-4dc4-9353-871b96cde61e'
                    }
                });
                setCard(response.data.data[0]);
                setImage(response.data.data[0].images.small);
            }catch(e){
                console.log('에러');
            }
        }; 
        getCard()

        db.collection("comments").where("postId","==",cardId)
        .orderBy("timestamp","desc")
        .onSnapshot((querySnapshot) => {
            setCommentLists(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        })
    },[]);
    
    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }

    return(
        <div className="carddetail">
            <CardInfo card={Card} image={Image} />
            <br/>
            <Comments CommentLists={CommentLists} postId={Card.id} refreshFunction={updateComment}/>
        </div>
    );
}

export default CardDetail;