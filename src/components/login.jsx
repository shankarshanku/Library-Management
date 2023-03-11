import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"
const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()

    let submit = (e) => {
        e.preventDefault()

        if (email == "admin@gmail.com" && password == 12345) {
            navigate('/admin')

        }
        else {
            alert('invaild credentials')
        }



    }
    return (
        
            <div className="login">
                <div className="image">
                    <img src={"/images/loginpic.jpeg"} alt="" />
                </div>
                <div className="login_form">
                    <h1 className="heading">Library Management System </h1>
                    <h1 className="subhead"> LOGIN FORM</h1>
                    <form action="" onSubmit={submit}>
                        <p>EMAIL</p>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email Adress" />
                        <p>PASSWORD</p>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Enter Password" />
                        <br />
                        <br />
                        <button>Login</button>
                    </form>
                </div>
            </div>
       
    );
}

export default Login;