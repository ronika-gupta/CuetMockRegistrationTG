
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./Styles/register.scss";
import MockRegister from "./Pages/Register/MockRegister";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Instructions from "./Pages/Instructions";
import PaymentSuccess from "./Pages/Payment/PaymentSuccess";
import PaymentFailure from "./Pages/Payment/PaymentFailure";
import MockPaymentConfirmation from "./Pages/Payment/MockPaymentConfirmation";

function App() {
  return (
    <>
        <Router  basename="/cuet_simulation">
          <Routes>
            <Route path="/cuet_nta_mock_registration" element={<MockRegister />} />
            <Route path=":email" exact element={<Instructions />} />
            <Route path="/cuet_nta_mock_simulation_login" exact element={<Login />} />
            <Route path="/cuet_nta_mock_simulation_applicationform" exact element={<Home />} />
            <Route path="/cuet_nta_mock_simulation_paymentsuccess" exact element={<PaymentSuccess />} />
            <Route path="/cuet_nta_mock_simulation_paymentfailure" exact element={<PaymentFailure />} />
            <Route path="/MockPaymentConfirmation" exact element={<MockPaymentConfirmation />} />


            
          </Routes>
        </Router>
    </>
  );
}

export default App;