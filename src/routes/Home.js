import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './Home.css';


const Home = () => {
  const [cards,setCards] = useState([]);
  const [loading,setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(0);
  
  const loadMoreItems = () => {
    const endpoint = `https://api.pokemontcg.io/v2/cards?page=1&pageSize=${CurrentPage + 20}`;
    getCards(endpoint);
}

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight >= scrollHeight) {
      loadMoreItems();
    }
  }

  useEffect(() => {
    const endpoint = `https://api.pokemontcg.io/v2/cards?page=1&pageSize=20`;
    getCards(endpoint);
    
  },[]);

  const getCards = async(endpoint) => {
    try{
      const response = await axios.get(endpoint);
      setCards(response.data.data);
      setLoading(false);
      setCurrentPage(response.data.pageSize)
    }catch(e){
      console.log('에러');
    }
  }; 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {window.removeEventListener('scroll', handleScroll)
  }});

      return (
        <div className="home">
        <section className="container">
          {loading ? (
            <div className="loader" >
              <span className="loader__text">로딩 중...</span>
            </div>
          ):(
          <div className="cards">
            {cards.map(card => (
              <Card key={card.id} cardId={card.id} image={card.images.small} name={card.name}/>
            ))}
          </div>
          )}
        </section>
        </div>
      );
}

export default Home;