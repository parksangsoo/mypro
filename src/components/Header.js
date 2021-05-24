import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/card_main_logo.png';
import RightMenu from './RightMenu';
import './Header.css';


const Header = () =>{
    return(
        <>
            <div className="nav">
                <div className="title">
                    <Link to="/" ><img src={logo}/></Link>
                </div>
                <div className="menu1">
                    <RightMenu/>
                </div>
            </div>
        </>

    );
}

export default Header;