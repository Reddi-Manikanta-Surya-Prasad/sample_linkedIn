import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){
  return(
  <div>
    <ToastContainer/>
    <Router>
      <Routes>
    <Route path="/"

    element={<Login />}/>
  
  
    <Route path= "/register"
    element= {<Register />}/>
  
  
    <Route path= "/home"
    element= {<HomeLayout />}/>
  
    <Route path= "/profile"
   element={<ProfileLayout/>}/>
   <Route path="/connections"
    element={<ConnectionLayout />}/>
    </Routes>
    </Router>
    </div>
  )
}
export default App;
// import {useEffect, useState} from 'react';
// import { BrowserRouter as Router,Routes,Route,useParams} from "react-router-dom";
// import Flights from "./Flights";
// import Navbar from "./Navbar";
// import Hotels from "./Hotels";
// import Flightsresult from "./FlightsResult";
// import HotelsResult from "./HotelsResult";
// import FlightInfo from "./FlightInfo";
// import ContextAllDataProvider from './ContextAllData';
// import PaymentBooking from './PaymentBooking';
// import HotelsCardInfo from './HotelsCardInfo';
// import Hotelpayment from '../SmallComp/Hotelpayment';

// function App() {
  
//   return (
//   <div className="App">
//     <ContextAllDataProvider>
//     <Router> 

//       <Routes>
//         <Route path="/" element={<Navbar/>}>
//         <Route index element={<Flights/>}/>
//         <Route path="/flights"  element={<Flights/>}/>
//         <Route path="/hotels" element={<Hotels/>}/>
//         </Route>
//         <Route path="/flights/:results" element={<Flightsresult/>}/>
//         <Route path="/hotels/:results" element={<HotelsResult/>}/>
//         <Route path="/flights/results/:Info" element={<FlightInfo/>}/>
//         <Route path="/flights/results/flightInfo/:paymentBooking" element={<PaymentBooking/>}/>
//         <Route path="/hotels/results/:hotelInfo" element={<HotelsCardInfo/>}/>
//         <Route path="/hotels/results/hotelInfo/:info" element={<Hotelpayment/>}/>
//         <Route path="/hotels/results/hotelInfo/Info/:paymentBooking" element={<PaymentBooking/>}/>
//       </Routes>
//     </Router>
//     </ContextAllDataProvider>
//   </div>
//   )
// }

// export default App;
