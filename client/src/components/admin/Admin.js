import React, { useState } from 'react'
import "./Admin.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletereservation, editreservation } from '../../JS/reservationslice';
import { deleteuser, logout } from '../../JS/userSlice/userSlice';
import { deleteservice, editservice, serviceSlice } from '../../JS/serviceslice';
import Serviceadd from './Serviceadd';


function Admin({ reservation,service, ping, setping }) {
  const users = useSelector((state) => state.user.userList);
  const user = useSelector((state) => state.user.user);
  const [category, setcategory] = useState("services")
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reservations=useSelector((state)=>state.reservation.reservationList);
  const services=useSelector((state)=>state.service.serviceList);
  console.log(reservations);
 
  const [editserv, seteditserv] = useState({
    name_service: service?.name_service,
    category: service?. category,
    
  prix: service?.prix,
    image:service?.image,
   
 
   
  });
  const [editres, seteditres] = useState({
 
    name_user:reservation?.image,
    name_service: reservation?.name,
    prix: reservation?. category,
    date: reservation?.prix,
    status:reservation?.status
  });

  return (
    <div className='admin'>
      <div className='menu'>
      <img src={user?.image} style={{width:"40px", height:"40px",borderRadius:"50%"}}/>
      <h4 className='adm'>Hello {user?.name}</h4>
        <button  onClick={()=>setcategory('services')}>SERVICES</button>
        <button  onClick={()=>setcategory('user')}>USERS</button>
        <button  onClick={()=>setcategory('reservation')}>RESERVATIONS</button>
        <button    onClick={() => {
          dispatch(logout());
          navigate("/login");
        }}>Logout</button>
      </div>
      {category=="services"?  
      
      <div className="servicess"><h3>SERVICE</h3> 
      <Serviceadd ping={ping} setping={setping}/>
   <table border="2px" width="100%" background-color='white'>
                  <tr>
                  <th>image</th>
                    <th>Name Service</th>
                    <th>Category</th>
                    <th>Prix</th>
                    
                    <th>delete </th>
                    <th>Edit </th>
                  </tr>
              {services?.map((el)=> <tr>
                <td><input type="text" className="form-control" placeholder= {el?.image} onChange={(e)=>seteditserv({...editserv,image:e.target.value})}></input><img src={el?.image} style={{width:"40px", height:"40px",borderRadius:"50%"}}/></td>
                <td><input type="text" className="form-control" placeholder= {el?.name_service} onChange={(e)=>seteditserv({...editserv,name_service:e.target.value})}></input></td>
              <td><input type="text" className="form-control" placeholder= {el?.category} onChange={(e)=>seteditserv({...editserv,category:e.target.value})}></input></td>
              <td><input type="text" className="form-control" placeholder= {el?.prix} onChange={(e)=>seteditserv({...editserv,prix:e.target.value})}></input></td>
              <td>
              <button
          onClick={() => {
            dispatch(deleteservice(el?._id));
            setping(!ping);
          }}
        >
          X
        </button>
        </td>
       
        <td>
        <button className="btn btn-primary profile-button" type="button" 
               onClick={() => {
              dispatch(editservice({ id: service?._id, editserv }));
              setping(!ping);
            }}>
                <img src="https://cdn-icons-png.flaticon.com/128/3388/3388903.png" style={{width:"20px", height:"30px"}}/>
                 </button>
    
        </td>

              </tr>)}
                </table>
   
   </div>:null}
   
   
   {category=="user"? <div className="users"><h3>USERS</h3>
   
   <table border="2px" width="100%" background-color='white'>
                  <tr>
                  <th>image</th>
                   
                    <th>Name</th>
                    <th>Lastename</th>
                    <th>Email</th>
                    
                  </tr>
              {users?.map((el)=> <tr>
                <td><img src={el?.image} style={{width:"40px", height:"40px",borderRadius:"50%"}}/></td>
               
                <td>{el?.name}</td>
                <td>{el?.lastname}</td>
                <td>{el?.email}</td>
              
              <td>
              <button
          onClick={() => {
            dispatch(deleteuser(el?._id));
            setping(!ping);
          }}
        >
          X
        </button>
        </td>
              </tr>)}
                </table>
   </div>:null}
   
   {category=="reservation"?<div className="reservations"><h3>RESERVATION</h3>
   
   <table border="2px" width="100%" background-color='white'>
                  <tr>
                    
                    <th>Name user</th>
                    <th>phone user</th>
                    <th>service name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>delete </th>
                    <th>Edit </th>
                  </tr>
              {reservations?.map((el)=> <tr>
                
                <td><input type="text" className="form-control" placeholder= {el?.name_user} onChange={(e)=>seteditres({...editres,name_user:e.target.value})}/></td>
                <td><input type="text" className="form-control" placeholder= {el?.num_tel} onChange={(e)=>seteditres({...editres,num_tel:e.target.value})}/></td>
                <td><input type="text" className="form-control" placeholder= {el?.name_service} onChange={(e)=>seteditres({...editres,name_service:e.target.value})}/></td>
              <td><input type="text" className="form-control" placeholder= {el?.prix} onChange={(e)=>seteditres({...editres,prix:e.target.value})}/></td>
              <td><input type="text" className="form-control" placeholder= {el?.date} onChange={(e)=>seteditres({...editres,date:e.target.value})}/></td>
              <td><input type="text" className="form-control" placeholder= {el?.status} onChange={(e)=>seteditres({...editres,status:e.target.value})}/>
  </td>
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
        <td>
        <button className="btn btn-primary profile-button" type="button" 
               onClick={() => {
              dispatch(editreservation({ id: reservation?._id, editres }));
              setping(!ping);
            }}>
                <img src="https://cdn-icons-png.flaticon.com/128/3388/3388903.png" style={{width:"20px", height:"30px"}}/>
                 </button>
    
        </td>
              </tr>)}
                </table>

   </div>:null}
</div>
  )
}

export default Admin