import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <form>
        <div className="loginmain">
            <div className="logintextbox">
                <h3>로그인</h3>
            </div>
            <div className="inputbox">
                <div className="inputid">
                    <p>아이디</p>
                    <input type="text"/>
                </div>
                <div className="inputpass">
                    <p>비밀번호</p>
                    <input type="text"/>
                </div>
            </div>
            <div className="bottom">

                <div className="buttonbox">
                    <Link to= '/register' className="membutton">회원가입</Link>
                    <Link to= '/login' className="loginbutton">로그인</Link>
                </div>
            </div>
        </div>
        </form>
    );
}

export default Login;