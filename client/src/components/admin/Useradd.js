
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';

function Useradd({ping, setping}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newuser, setnewuser] = useState({
      
        "image":"",
      "name":"",
      "lastname":"",
      "email":"",
      "password":"",
     
     
    })
    const dispatch = useDispatch();
  return (
    <div>
    <>
 <button class="cssbuttons-io-button" variant="primary" onClick={handleShow}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
<span>Add</span>
</button>

 <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Add user</Modal.Title>
   </Modal.Header>
   <Modal.Body>
   <Form>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>image</Form.Label>
   <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setnewuser({...newuser, image:e.target.value})} />
 </Form.Group>
   <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>name of user</Form.Label>
   <Form.Control type="text" placeholder="Enter name user" onChange={(e)=>setnewuser({...newuser, name:e.target.value})} />
 </Form.Group>
 
 
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>lastname</Form.Label>
   <Form.Control type="text" placeholder="Enter lastname" onChange={(e)=>setnewuser({...newuser, lastname:e.target.value})}/>
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>email</Form.Label>
   <Form.Control type="text" placeholder="Enter email" onChange={(e)=>setnewuser({...newuser, email:e.target.value})}/>
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>password</Form.Label>
   <Form.Control type="text" placeholder="Enter password" onChange={(e)=>setnewuser({...newuser, password:e.target.value})}/>
 </Form.Group>

 </Form>
   </Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Close
     </Button>
     <Button variant="primary"  onClick={()=>{
       dispatch(adduser(newuser));
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

export default Useradd