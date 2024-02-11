import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import { Context } from '../../Context/Context';
import  axios  from "axios";
const Layout = () => {
  const [auth,setAuth] = useState({
    uesr:null,
    token:"",
  });
  //default axios
  axios.defaults.headers.common['Authorization']=auth?.token
  useEffect(()=>{
    const data = localStorage.getItem("auth");
    if (data) {
      const paresData=JSON.parse(data);
      setAuth({
        user:paresData.user,
        token:paresData.token,
      })
    }
  })
  const value = 'My Context Value';
  return (
    <div>
    <Context.Provider value={[auth,setAuth]}>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </Context.Provider>
    </div>
  );
};

export default Layout;