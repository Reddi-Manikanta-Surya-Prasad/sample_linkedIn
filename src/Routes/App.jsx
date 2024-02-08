import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const { Navigate } = useNavigate;
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    if (userData) {
      setAuthenticated(true);
      setCurrentUser(userData);
    } else {
      Navigate("/login");
    }
  }, []);

  useEffect(() => {}, [currentUser]);

  return (
    <div>
      <ToastContainer />
      <Router>
        {authenticated === false ? (
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<ProfileLayout />} />
            <Route path="/connections" element={<ConnectionLayout />} />
          </Routes>
        )}
      </Router>
    </div>
  );
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
