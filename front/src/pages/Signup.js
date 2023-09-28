import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    // 초기값 세팅 - 아이디, 이름, 비밀번호, 이메일
    const [username, setUsername] = useState("");
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [email, setEmail] = useState("");
    
    const [errorMessage, setErrorMessage] = useState([]);
    const navigate = useNavigate();


    function onChange(event) {
        if(event.target.name === "username") {
            setUsername(event.target.value)
        } else if (event.target.name === "userid") {
            setUserid(event.target.value)
        } else if (event.target.name === "password") {
            setPassword(event.target.value)
        } else if (event.target.name === "passwordConfirm") {
            setPasswordConfirm(event.target.value)
        } else if (event.target.name === "email") {
            setEmail(event.target.value)
        }
    }


    async function onSubmit(event) {
        event.preventDefault();

        const newErrorMessages = [];
        if (username === "") {
            newErrorMessages.push("이름은 필수 입력 항목입니다.");
        }
        if (userid === "") {
            newErrorMessages.push("아이디는 필수 입력 항목입니다.");
        }
        if (password === "") {
            newErrorMessages.push("비밀번호는 필수 입력 항목입니다.");
        }
        if (passwordConfirm === "") {
            newErrorMessages.push("비밀번호 확인은 필수 입력 항목입니다.");
        }
        if (email === "") {
            newErrorMessages.push("이메일은 필수 입력 항목입니다.");
        }
        if (password !== passwordConfirm) {
            newErrorMessages.push("비밀번호가 일치하지 않습니다.");
        }


        setErrorMessage(newErrorMessages);

        if (newErrorMessages.length === 0) {
            try {
                const result = await axios.post("http://localhost:8080/signup", {
                    username: username,
                    userid: userid,
                    password: password,
                    passwordConfirm: passwordConfirm,
                    email: email
                })
                if (result.status === 200) {
                    navigate("/login")
                }
            } catch(error) {
                // console.log(error.response.data);
                if (error.response && error.response.data) {
                    // 서버에서 반환한 에러메세지 출력
                    // alert(error.response.data);
                    setErrorMessage([error.response.data]);
                    setUsername("")
                    setUserid("")
                    setPassword("")
                    setPasswordConfirm("")
                    setEmail("")
                } else {
                    console.log(error);
                }
            }
        }
    }

    return (
        <div className="container my-3">
            <div className="my-3 border-bottom">
                <h3><b>회원가입</b></h3>
            </div>
            <br/>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <form onSubmit={onSubmit} style={{width:'500px'}}>
                    {errorMessage.length > 0 &&
                        (<div className="alert alert-danger" role="alert">
                            {errorMessage.map((message, index) => (<div key={index}>{message}</div>))}
                        </div>)
                    }
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label"><b>이름</b></label>
                        <input onChange={onChange} value={username} type="text" className="form-control" id="username" name="username"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userid" className="form-label"><b>아이디</b></label>
                        <input onChange={onChange} value={userid} type="text" className="form-control" id="userid" name="userid" autoComplete="username"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><b>비밀번호</b></label>
                        <input onChange={onChange} value={password} type="password" className="form-control" id="password" name="password" autoComplete="new-password"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordConfirm" className="form-label"><b>비밀번호 확인</b></label>
                        <input onChange={onChange} value={passwordConfirm} type="password" className="form-control" id="passwordConfirm" name="passwordConfirm" autoComplete="new-password"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><b>이메일</b></label>
                        <input onChange={onChange} value={email} type="email" className="form-control" id="email" name="email"></input>
                    </div>
                    <br/>
                    <button type="sumbit" className="btn btn-primary">회원가입</button>
                </form>
            </div>
        </div>
    )
}


export default Signup;