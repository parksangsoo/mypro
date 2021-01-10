import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ info, image, name }) =>{

return (
        <div className="card">
            <Link to={{
                        pathname: '/movie-card',
                        state: { info },
            }}>
            <img src={image} alt={name} title={name}/>
            </Link>
        </div>

);
}

Card.propTypes = { 
    image: PropTypes.string.isRequired
};

export default Card;
