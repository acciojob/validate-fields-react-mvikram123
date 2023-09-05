import React,{useState} from "react";
 

const Login=()=>{

    let[username,setUsername]=useState("");
    let[password,setPassword]=useState("");
    let[error,setError]=useState("");
    let[success,setSuccess]=useState("")

    function validation(){


        if(username=="" || password==""){

            setError("Both username and password are required");
            setSuccess("");
        }
        else{
        setSuccess("log in successful");
        setError("");
        }

    }






    return(

        <div>
        Username  <input type="text" onChange={(e)=>setUsername(e.target.value)}></input><br />
        Password <input type="password" onChange={(e)=>setPassword(e.target.value)}></input><br />
        <div id="errorMessage" style={{color:"red"}}>{error}</div>
        <div id="" style={{color:"green"}}>{success}</div>
        <button onClick={validation}>Login</button>
        </div>
    )
}

export default Login;