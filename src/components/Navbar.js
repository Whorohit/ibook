import React from 'react'
import { useEffect } from 'react';
import {
  Link, Navigate, useLocation,useNavigate
} from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  useEffect(() => {
    console.log(location)
  }, [location])
  const navigate=useNavigate()
  const Logout= async()=>{
     localStorage.clear()
     navigate('/login')

  }
  return (<>
    <nav className="navbar navbar-expand-lg navbar-dark text-dark bg-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bolder fs-2 text-dark" to="/">Icloud</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav fw-bold ">
            <li className={`nav-item active ${location.pathname==='/'?'border-bottom  border-2 border-dark':''}` }> <Link className="nav-link text-dark   " to="/">Home </Link> </li>
            <li className={`nav-item active ${location.pathname==='/about'?'border-bottom  border-2 border-dark':''}` }><Link className="nav-link text-dark" to="/about"> About </Link></li>
            

          </ul>
          <ul className="navbar-nav ms-auto fw-bold ">
           
            <li className={`nav-item active ${location.pathname==='/login'?'border-bottom  border-2 border-dark':''}` }><Link className="nav-link text-dark" to="/login" onClick={Logout}> LogoOut</Link></li>

          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}
