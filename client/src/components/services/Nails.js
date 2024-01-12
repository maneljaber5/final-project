import React from 'react'
import '../ServiceCard.css';
import { useSelector } from 'react-redux';
import CardDetails from './CardDetails';
function Nails({ping, setping}) {
    const services=useSelector((state)=>state.service.serviceList)
    return (
      <div className='servicebox'>
          {services?.filter((el)=>el.category=="nails").map((el)=><div className="card">
          <img src={el.image}/>
          <h3>{el.name_service}</h3>
          <p>{el.prix}</p>
          <CardDetails service={el} ping={ping} setping={setping}/>
          </div>)}
      </div>
    )
}

export default Nails