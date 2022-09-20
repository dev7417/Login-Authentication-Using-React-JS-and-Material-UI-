import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("data");
    let userLoginData = localStorage.getItem("loginData");
    if (!login && !userLoginData) {
      navigate("/LoginReg");
    } else {
      navigate("/Dashboard");
    }
  }, []);
  return (
    <div>
    
      <Component />
    </div>
  );
}
