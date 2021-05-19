import React, { useState,useEffect } from 'react';
import Comments from '../components/Comments';
import CardInfo from '../components/CardInfo';
import './CardDetail.css';
import axios from 'axios';

const CardDetail = (props) => {

    let cardId = props.match.params.cardId
    const [Card, setCard] = useState("")
    const [Image, setImage] = useState("")

    useEffect(() => {
        const getCard = async() => {
            try{
              const response = await axios.get(`https://api.pokemontcg.io/v2/cards?q=id:${cardId}`);
              setCard(response.data.data[0]);
              setImage(response.data.data[0].images.small);
              console.log(response.data.data[0].images.small)
            }catch(e){
              console.log('에러');
            }
        }; 
        getCard()
    },[]);
    
    return(
        <div className="carddetail">
            <CardInfo card={Card} image={Image}/>
            <Comments/>
        </div>
    );
}

export default CardDetail;