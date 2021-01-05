import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = ({ info }) =>{

return (

        <div className="movie">
            <Link to={{
                        pathname: '/movie-detail',
                        state: { info },
            }}>

            <img src={info.imageUrl} alt={info.name} title={info.name}/>
            <div className="movie__data">
                <h3 className="movie__title">이름:{info.name}</h3>
            </div>
            </Link>
        </div>

);
}

Movie.propTypes = { 
    info: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
