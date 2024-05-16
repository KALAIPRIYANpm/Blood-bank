// import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./App"
import Donor from "./form"
import Login from "./loginpage"
import Admin from "./admin"



const RouterPath=()=>{
    return(
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/donor" element={<Donor/>}/>
            <Route path="/admin" element={<Login/>}/>
            <Route path="/adminhome" element={<Admin/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default RouterPath;