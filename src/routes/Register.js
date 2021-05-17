import React, { useState } from 'react';
import { auth } from '../service/firebase';
import './Register.css';


const Register = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");
    const [name, setName] = useState("");

    const register = () => {

        if(!name){
            return alert("이름을 입력해주세요!");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                
                displayName: name,
            })
        }).catch((error) => alert(error));

        history.push('/login');
    };

    return(
        <form>
        <div className="registermain">
            <div className="registertitle">
                <h3>회원가입</h3>
            </div>
            <div className="register1">
                <input type="text" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="text" placeholder="이름" value={name} onChange={e => setName(e.target.value)}/>
            </div>

            {/*회원가입 후 파이어베이스에 회원 등록되고 로그인창으로 되돌아감*/}
            <div className="buttonbox">
                <div className="rightbox">
                    <button className="registerbutton" onClick={register}>가입</button>
                </div>
            </div>
        </div>
        </form>
    );
}

export default Register;