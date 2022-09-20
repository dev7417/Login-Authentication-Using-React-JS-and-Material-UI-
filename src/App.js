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
import Protected from "./Components/Protected";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Component={Navbar} />}>
            <Route index element={<LoginReg />} />
            <Route path="/Contact"
              element={<Protected Component={Contact} />}
            />
            <Route path="/LoginReg" element={<LoginReg />} />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/sendresetemail" element={<SendResetPassword />} />
            <Route path="/resetpasswordform" element={<ResetpasswordForm />} />
            <Route
              path="/dashboard"
              element={<Protected Component={Dashboard} />}
            />
            <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
