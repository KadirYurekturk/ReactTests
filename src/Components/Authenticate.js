import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function Authenticate() {

    const {context} = true;

  return (
    context ?
    <Navigate to="/"></Navigate>
    :<Outlet />
  )
}
