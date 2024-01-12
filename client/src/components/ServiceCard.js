
import React from 'react'
import './ServiceCard.css';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard() {
  return (
    <div className='servicebox'>


   
  <Link to="/hair" style={{textDecoration:"none", color:"#dd2476" }}> <div className="card">
        <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/slide9-1536x768.jpg"/>
        <h3>Hair</h3>
        <p>Hydrate, protect and revive your hair by using our best styling products. Curl and create volume</p>
    </div> </Link>
    <Link to="/nails" style={{textDecoration:"none", color:"#dd2476" }}> <div className="card">
        <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/slide10-1-1024x640.jpg"/>
        <h3>Nails</h3>
        <p>We offer professional makeup and nails services with a look customized just for you.</p>
    </div> </Link>
    <Link to="/makeup" style={{textDecoration:"none", color:"#dd2476" }}> <div className="card">
        <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/slide6-1-1024x640.jpg"/>
        <h3>Make-up</h3>
        <p>We offer professional makeup and nails services with a look customized just for you.</p>
    </div> </Link>
    <Link to="/massage" style={{textDecoration:"none", color:"#dd2476" }}> <div className="card">
        <img src="https://vegathemes.net/beauty-center/main/wp-content/uploads/2020/05/slide4-1-1024x640.jpg"/>
        <h3>Massage & Wellness</h3>
        <p>Peaceful spa treatments for deep relaxation of the mind, reducing stress and life changing services.</p>
    </div> </Link>
      </div>



)}

export default ServiceCard