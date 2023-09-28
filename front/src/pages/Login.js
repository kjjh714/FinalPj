import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import kakao from './kakao_login.png'
// import { KAKAO_AUTH_URL } from "./OAuth";

function Login({isLogin, setIsLogin}) {

    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function onChange(event) {
        if (event.target.name === "userid") {
            setUserid(event.target.value)
        } else if (event.target.name === "password") {
            setPassword(event.target.value)
        }
    }

    async function onSubmit(event) {
        event.preventDefault();

        const newErrorMessages = [];
        if (userid === "") {
            newErrorMessages.push("아이디를 입력하세요.");
        }
        if (password === "") {
            newErrorMessages.push("비밀번호를 입력하세요.");
        }

        setErrorMessage(newErrorMessages);

        if (newErrorMessages.length === 0) {

            try {

                const result = await axios.post("http://localhost:8080/login", {
                    userid: userid,
                    password: password
                })
                if (result.status === 200) {
                    console.log(result);
                    setIsLogin(true);   // true로 설정하면 navbar의 로그인 버튼이 로그아웃으로 바뀜
                    window.localStorage.setItem("userid", result.data);
                    navigate("/")
                }
            } catch(error) {
                if (error.response && error.response.data) {
                    setErrorMessage([error.response.data]);
                    setUserid("");
                    setPassword("");
                } else {
                    console.log(error);
                }
            }
        }

    }

    return (
        <div className="container my-3" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <form onSubmit={onSubmit} style={{width: '400px'}}>
                {errorMessage.length > 0 &&
                    (<div className="alert alert-danger" role="alert">
                        {errorMessage.map((message, index) => (<div key={index}>{message}</div>))}
                    </div>)
                }
                <div className="mb-2">
                    <label className="form-label" htmlFor="userid"><b>아이디</b></label>
                    <input onChange={onChange} type="text" className="form-control" id="userid" name="userid"></input>
                </div>
                <br/>
                <div className="mb-2">
                    <label className="form-label" htmlFor="password"><b>비밀번호</b></label>
                    <input onChange={onChange} type="password" className="form-control" id="password" name="password" autoComplete="current-password"></input>
                </div>
                <br />
                <button type="sumbit" className="btn btn-primary">로그인</button>
            </form>
            {/* <div className="my-3">
                <a href={KAKAO_AUTH_URL} className="kakaobtn">
                    <img src={kakao}></img>
                </a>
            </div> */}
        </div>
    )
}

export default Login;