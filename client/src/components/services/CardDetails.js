import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addreservation } from '../../JS/reservationslice';
import { useDispatch, useSelector } from 'react-redux';

function CardDetails({service,ping,setping}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const user = useSelector((state) => state.user.user);
    const [newreservation, setnewreservation] = useState({
        id_user:user?._id,
        name_user:user?.name +" "+user?.lastname,
        num_tel:"",
        name_service:service?.name_service,
        prix:service?.prix,
        date:"",
        status:"not confirmed",
  
      });
       
const dispatch=useDispatch()
  return (
    <>
      <button variant="primary" onClick={handleShow}>
    Book now
      </button>

      <Modal show={show} onHide={handleClose} size='lg'>
        <div className='modaal'>
      <div className='imgmodal'> <img src={service?.image} /> </div> 
      <div className='contenu'>
        <Modal.Header closeButton>
    
          <Modal.Title><h3>{service?.category}</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body><h5>{service?.name_service}</h5></Modal.Body>
        <Modal.Body>Hydrate, protect and revive your hair by using our best styling products. Curl and create volume</Modal.Body>
    
        <Modal.Body>prix:{service?.prix} DT</Modal.Body>
        <Modal.Body>Enter your Number phone :</Modal.Body>
        <Form.Control type="text" className='tel' onChange={(e)=>setnewreservation({...newreservation, num_tel:e.target.value})} />
        <Modal.Body>Enter your favorite date :</Modal.Body>
        <Form.Control type="date" className='tel' onChange={(e)=>setnewreservation({...newreservation, date:e.target.value})} />
        <Modal.Footer>
        <button variant="primary" onClick={()=>{dispatch(addreservation(newreservation));setping(!ping)}}>
            confirmed
          </button>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          
        </Modal.Footer>
        </div>
        </div>
      </Modal>
    </>
  )
}

export default CardDetails