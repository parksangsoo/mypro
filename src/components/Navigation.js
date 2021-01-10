import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/card_main_logo.png';
import './Navigation.css';

const Navigation = () =>{
    return(
        <>
            <div className="nav">
                <Link to="/" ><img src={logo}/></Link>
            </div>
        </>

    );
}

export default Navigation;