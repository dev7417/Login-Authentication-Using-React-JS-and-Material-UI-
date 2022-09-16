import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginReg from "./Components/LoginReg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LoginReg" element={<LoginReg/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;