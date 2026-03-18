import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard(){
  return(
    <>
      <Sidebar/>
      <Navbar/>

      <div style={{marginLeft:250,padding:40}}>
        <h1>Dashboard</h1>
        <p>Welcome to the Government Scheme Finder</p>
      </div>
    </>
  )
}

export default Dashboard;
