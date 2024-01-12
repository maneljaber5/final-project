import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../JS/userSlice/userSlice';
function Navbarr({settext, setrate}) {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <header className="header">
      <Navbar expand="lg" className="bg-body-tertiary" settext={settext} setrate></Navbar>
    <div className="header__inner">
      <div className="header__logo">
        <div className="header__logo-img"><a href="https://vegathemes.net/beauty-center/main"><img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/logo.png" alt="Beauty Center" /></a></div>
        <h1 className="header__title"><a >  <Link to="/" style={{textDecoration:"none"}} > Beauty Center</Link></a></h1>
        <div className="header__description">WELLNESS &amp; SPA</div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <Link to="/" style={{textDecoration:"none", color:"#dd2476"}} > 
                HOME
                </Link>
                </a>
            </li>
            
            <li className="nav-item dropdown">
            <a className="nav-link" href="ServiceCard.html">
            <Link to="/services" style={{textDecoration:"none", color:"#dd2476"}} > 
                SERVICES
                </Link>
              </a>
            
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="gallery.html">
              <Link to="/gallery" style={{textDecoration:"none", color:"#dd2476"}} > 
                GALLERY
                </Link>
                </a>
            </li>
           
           
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
              <Link to="/contact" style={{textDecoration:"none", color:"#dd2476"}} > 
                CONTACT
                </Link>
                </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
              <Link to="/about" style={{textDecoration:"none", color:"#dd2476"}} > 
                ABOUT
                </Link>
                </a>
            </li>
          
           {!user? <button className="button-login">
              <a className="nav-link" href="login.html">
              <Link to="/login" style={{textDecoration:"none", color:"#dd2476" }} > 
               Login
                </Link>
                </a>
            </button>:<div>       <li className="nav-item">
              <a className="nav-link" href="about.html">
              <Link to="/profil" style={{textDecoration:"none", color:"#dd2476"}} > 
               Profil
                </Link>
                </a>
            </li>
            
      <button className='logout'
        onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}
      >
        logout
      </button>
      <h1 className='prof'>Hello {user?.name}</h1></div>}
            </ul>
        </div>
        
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=> settext(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </nav></div>
   
  </header>
  )
}

export default Navbarr