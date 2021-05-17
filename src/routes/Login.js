import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { Link } from 'react-router-dom';
import { auth } from '../service/firebase';

const Login = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
            }))
        }).catch((error) => alert(error));

        history.push('/');
    };

    return(
        <form>
        <div className="loginmain">
            <div className="logintextbox">
                <h3>로그인</h3>
            </div>
            <div className="inputbox">
                <div className="inputid">
                    <p>이메일</p>
                    <input type="text" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="inputpass">
                    <p>비밀번호</p>
                    <input type="password" placeholder="비밀번호" value={password}  onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="bottom">
                <div className="buttonbox">
                    <Link to= '/register' className="membutton">회원가입</Link>
                    <button type="submit" className="loginbutton" onClick={loginToApp}>로그인</button>
                </div>
            </div>
        </div>
        </form>
    );
}

export default Login;