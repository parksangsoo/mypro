import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ info, image, name }) =>{

return (
        <div className="card">
            <Link to={{
                        pathname: '/card-detail',
                        state: { info },
            }}>
            <img src={image} alt={name} title={name}/>
            </Link>
        </div>
    );
}


export default Card;
