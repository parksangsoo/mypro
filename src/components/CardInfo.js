import React from 'react'
import './CardInfo.css';

function CardInfo({card, image}) {

    return (
        <div className="cardinfo">
            <div className="cardimage">
                <img src={image}/>
                <p>일러스트a:{card.artist}</p>
            </div>
            <div className="cardbox">
                <div className="cardname">
                    <h2>딱충이</h2>
                    <h2>HP{card.hp}</h2>
                </div>
                <div className="cardjong">
                    <h3>카드종류:1진화 포켓몬</h3>
                </div>
                <div className="cardtek">
                    <h3>딱딱해지기</h3>
                    <p>상대의 다음 차례에 이 포켓몬이 받는 기술의 데미지는 -40이된다.</p>
                </div>
                <div className="cardsok">
                    <div>
                        <h3>약점</h3>
                    </div>
                    <div>
                        <h3>저항력</h3>
                    </div>
                    <div>
                        <h3>후퇴</h3>
                    </div>
                </div>
                <div className="cardsub">
                    <p>천적에게 발견되지 않도록 잎사귀 뒷면이나 가지의 틈새에 숨어서 진화할 때를 기다린다.</p>
                </div>
            </div>
        </div>
    )
}

export default CardInfo
