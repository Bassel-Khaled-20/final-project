import React, { useEffect } from 'react'
import style from './ProtectedRouteResetPassword.module.css'
import { Navigate, useParams } from 'react-router-dom'


export default function ProtectedRouteResetPassword(props) {

  useEffect(()=>console.log(x),[])
  if(localStorage.getItem("token")){
    return props.children}
    else {
    return <Navigate to={"/login"}/>}

    }
