import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser, deleteuser, edituser, logout } from "../JS/userSlice/userSlice";
import "./Profil.css";
import  {deletereservation, editreservation}  from "../JS/reservationslice";


function Profil({  ping, setping }) {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservations=useSelector((state)=>state.reservation.reservationList);
  console.log(reservations);
 
  const [edit, setedit] = useState({
    image:user?.image,
    name: user?.name,
    lastname: user?.lastname,
    email: user?.email,
    password: user?.password,
  });
  return (
    <div>
 

      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src={user?.image} /><span className="font-weight-bold">{user?.name}</span><span className="text-black-50">{user?.email}</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder={user?.name} onChange={(e)=>setedit({...edit,name:e.target.value})}  /></div>
                <div className="col-md-6"><label className="labels">Lastname</label><input type="text" className="form-control"  placeholder={user?.lastname} onChange={(e)=>setedit({...edit,lastname:e.target.value})} /></div>
              </div>
              <div className="row mt-3">
              <div className="col-md-12"><label className="labels">Image</label><input type="text" className="form-control" placeholder={user?.image} onChange={(e)=>setedit({...edit,image:e.target.value})}  /></div>
                <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder={user?.email} onChange={(e)=>setedit({...edit,email:e.target.value})}  /></div>
                <div className="col-md-12"><label className="labels">Reservation</label>
                <table border="2px" width="100%">
                  <tr>
                    <th>Name Service</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>delete </th>
                  </tr>
              {reservations?.filter((el)=>el.id_user==user?._id).map((el)=> <tr><td>{el?.name_service}</td>
              <td>{el?.prix}</td><td>{el?.date}</td><td>{el?.status}</td>
              <td>
              <button
          onClick={() => {
            dispatch(deletereservation(el?._id));
            setping(!ping);
          }}
        >
          X
        </button>
        </td>
              </tr>)}
                </table>
                </div>
              </div>
              
              <div className="mt-5 text-center">
                <button className="btn btn-primary profile-button" type="button" 
               onClick={() => {
              dispatch(edituser({ id: user?._id, edit }));
              setping(!ping);
            }}>
                Edit Profile</button>
                
                
                </div>
              
   
            </div>
          </div>
         
           
       
        </div>
      </div>
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
