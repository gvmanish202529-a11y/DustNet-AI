import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

export default function Login() {

const navigate=useNavigate();

const {login}=useAuth();

const[email,setEmail]=useState("");

const[password,setPassword]=useState("");

const submit=async(e)=>{

e.preventDefault();

try{

const data=await loginUser({

email,

password

});

login(data.access_token);

navigate("/dashboard");

}

catch(err){

alert("Invalid Credentials");

}

};

return(

<div className="login">

<form onSubmit={submit}>

<h1>DustNet AI</h1>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button>

Login

</button>

</form>

</div>

);

}
