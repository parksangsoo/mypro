import React from 'react'
import { selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './RightMenu.css';

function RightMenu() {

    const user = useSelector(selectUser)
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logout());
    }

    
        if(user){
            return (
                <div className="loginbar">
                    <Menu Icon={PersonIcon} title="로그아웃" onClick={logout}/>
                    <Menu Icon={SearchIcon} title="카드검색"/>
                </div>
            )
        }else{
            return (
                <div className="loginbar">
                    <Link to="/login" ><Menu Icon={PersonIcon} title="로그인"/></Link>
                    <Menu Icon={SearchIcon} title="카드검색"/>
                </div>
            )
        }

}

export default RightMenu
