import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./Components/LoginReg";
import SendResetPassword from "./Components/SendResetPassword";
import UserLogin from "./Components/UserLogin";
import ResetpasswordForm from "./Components/ResetpasswordForm";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LoginReg" element={<LoginReg/>}/>
            <Route path="/userlogin" element={<UserLogin/>}/>
            <Route path="/sendresetemail" element={<SendResetPassword />}/>
            <Route path="/resetpasswordform" element={<ResetpasswordForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
