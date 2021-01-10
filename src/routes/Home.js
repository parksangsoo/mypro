import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './Home.css';


const Home = () => {
  const [cards,setCards] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const getCards = async() => {
      try{
        const response = await axios.get('https://api.pokemontcg.io/v1/cards');
        setCards(response.data.cards);
        setLoading(false);
      }catch(e){
        console.log('에러');
      }
    };
    getCards();    
  },[]);

      return (
        <>
        <section className="nava">
        </section>
          <h1 className="cs">상세정보를 볼 카드를 클릭해주세요</h1>
          <div className="wrap">
          </div>
        <section className="container">
          {loading ? (
            <div className="loader" >
              <span className="loader__text">로딩 중...</span>
            </div>
          ):(
          <div className="cards">
            {cards.map(card => (< Card info={card} key={card.id} image={card.imageUrl} name={card.name}
            />
            ))}
          </div>
          )}
        </section>
        </>
      );
}

export default Home;