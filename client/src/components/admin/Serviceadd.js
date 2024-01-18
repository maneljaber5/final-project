
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { addservice } from '../../JS/serviceslice';

function Serviceadd({ping, setping}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newservice, setnewservice] = useState({
      
  
      "name_service":"",
      "category":"",
      "prix":"",
      "image":"",
     
    })
    const dispatch = useDispatch();
  return (
    <div>
         <>
         <div className='button_add'>
      <button class="cssbuttons-io-button" variant="primary" onClick={handleShow}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
  <span>Add</span>
  </button>
  </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name of service</Form.Label>
        <Form.Control type="text" placeholder="Enter name service" onChange={(e)=>setnewservice({...newservice, name_service:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder="Enter category" onChange={(e)=>setnewservice({...newservice, category:e.target.value})} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter prix" onChange={(e)=>setnewservice({...newservice, prix:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setnewservice({...newservice, image:e.target.value})}/>
      </Form.Group>
     
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={()=>{
            dispatch(addservice(newservice));
        setping(!ping);
        handleClose();
      }}
      >
        
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Serviceadd