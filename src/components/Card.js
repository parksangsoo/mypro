import React from 'react';
import './Card.css';

const Card = ({ image, name, cardId }) =>{

return (
        <div className="card">
            <a href={`/card/${cardId}`}>
                <img src={image} alt={name}/>
            </a>
        </div>
    );
}


export default Card;
