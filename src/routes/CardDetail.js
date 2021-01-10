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
                <div className="leftinfo">
                    <img src={card.info.imageUrl} alt={card.info.name} title={card.info.name}/>
                    <p>일러스트<br/>{card.info.artist}</p>
                </div>
                <div className="rightinfo">
                    <div className="header">
                        <div className="name">
                            <span className="card-hp title">{card.info.name}</span>
                            <span className="card-hp level"></span>
                        </div>
                        <div className="hp">
                            <span className="hp_num">HP:{card.info.hp}</span>
                        </div>
                    </div>
                    <div className="pokemon-info">카드 종류 : {card.info.subtype} {card.info.supertype}</div>
                    <div className="pokemon-abilities">
                    {card.info.attacks.map(movie => (
                        <div className="ability" key={movie.name}>
                            <div className="area-parent">
                                <span className="skillname">스킬이름:{movie.name}</span>
                            </div>
                            <p>스킬설명:{movie.text}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
                
}

export default Detail;