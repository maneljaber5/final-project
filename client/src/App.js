import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profil from "./components/Profil";
import Register from "./components/Register";
import { getuser, userCurrent } from "./JS/userSlice/userSlice";
import PrivateRoute from "./Routes/PrivateRouter";
import Login from "./components/Login";
import Home from "./components/Home";
import ServiceCard from "./components/ServiceCard";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbarr from "./components/Navbarr";
import { getservice } from "./JS/serviceslice";
import Hair from "./components/services/Hair";
import Nails from "./components/services/Nails";
import Makeup from "./components/services/Makeup";
import Massage from "./components/services/Massage";
import { getreservation } from "./JS/reservationslice";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();

  const [ping, setping] = useState("");
  useEffect(() => {
    dispatch(getuser());
    dispatch(userCurrent());
    dispatch(getservice());
    dispatch(getreservation())
  }, [ping]);

  const [text, settext] = useState("")
  const [rate, setrate] = useState("")
  return (
    <div className="App">
      <Navbarr  settext={settext} setrate={setrate}/>
      <Routes>
        <Route  path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil ping={ping} setping={setping} />} />
        </Route>{" "}
        <Route path="/" element={ <Home/> } />
        <Route path="/services" element={ <ServiceCard /> } />
        <Route path="/gallery" element={ <Gallery/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/hair" element={ <Hair ping={ping} setping={setping}/> } />
        <Route path="/nails" element={ <Nails ping={ping} setping={setping}/> } />
        <Route path="/makeup" element={ <Makeup ping={ping} setping={setping}/> } />
        <Route path="/Massage" element={ <Massage ping={ping} setping={setping}/> } />
        <Route path="/login" element={ <Login/> } />
   
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
