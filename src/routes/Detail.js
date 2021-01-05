import React, { useEffect } from 'react';
import './Detail.css';

const Detail = ({ location,history }) => {

    useEffect(() => {
        if(location.state === undefined){
            history.push('/');
        }    
    },[]);

    const card = location.state;
    if(location.state){
        return(
            <div className="cardinfo">
                {card.info.name}
            </div>
        );
    } else {
        return null;
    }
                
}

export default Detail;