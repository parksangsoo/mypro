import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';


const Home = () => {
  const [movies,setMovies] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async() => {
      try{
        const response = await axios.get('https://api.pokemontcg.io/v1/cards');
        setMovies(response.data.cards);
        setLoading(false);
      }catch(e){
        console.log('에러');
      }
    };
    getMovies();    
  },[]);

      return (
        <section className="container">
          {loading ? (
            <div className="loader" >
              <span className="loader__text">로딩 중...</span>
            </div>
          ):(
          <div className="movies">
            {movies.map(movie => (< Movie info={movie} key={movie.id}
            />
            ))}
          </div>
          )}
        </section>
      );
}

export default Home;