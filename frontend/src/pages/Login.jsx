import { useNavigate } from "react-router-dom";

function Login(){

  const nav = useNavigate();

  return(
    <div style={{textAlign:"center",marginTop:150}}>
      <h1>Government Scheme AI Assistant</h1>

      <button
        onClick={()=>nav("/dashboard")}
        style={{
          padding:"14px 30px",
          fontSize:18,
          background:"#2563eb",
          color:"white",
          border:"none",
          borderRadius:8
        }}
      >
        Enter Dashboard
      </button>

    </div>
  )
}

export default Login;
