import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/card_main_logo.png';
import Menu from './Menu';
import './Navigation.css';

const Navigation = () =>{
    return(
        <>
            <div className="nav">
                <div className="title">
                    <Link to="/" ><img src={logo}/></Link>
                </div>
                <div className="menu1">
                    <Menu title="새소식"/>
                    <Menu title="제품정보"/>
                    <Menu title="놀이방법" />
                    <Menu title="이벤트"/>
                    <Menu title="카드검색"/>
                    <Menu title="덱레시피"/>
                    <Menu title="플레이어즈"/>
                </div>
                <div className="menu2">

                </div>
            </div>
        </>

    );
}

export default Navigation;