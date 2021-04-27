import React from 'react';
import './Menu.css';

const Menu = ({ Icon, title }) => {
    return(
            <div className="menu">
                {Icon ? (
                    <div className="menu-1"> 
                        {Icon && <Icon fontSize='small'/>}
                        <p>{title}</p>
                    </div>
                ):(
                    <div className="menu-2">    
                        <h3>{title}</h3>
                    </div>
                )}
            </div>
    );
}

export default Menu;