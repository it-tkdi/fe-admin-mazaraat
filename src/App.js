import './App.css';
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import LoginPage from './pages/Login';
import React, { useEffect, useState } from 'react';
import AdminLayout from './router';


function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    const u = localStorage.getItem("user");
    u && JSON.parse(u) ? setUser(true) : setUser(false);
  }, [])

  useEffect(()=> {
    localStorage.setItem("user", user);
  },[user])

  const location = useLocation().pathname;
  const navigation = useNavigate();

  const signout = ()=> {
    setUser(false);
    navigation('/login')
  }
  console.log(location);
  return (
    <Routes>
      {!user && (
        <Route
          path="login"
          element={<LoginPage authenticate={() => setUser(true)} />}
        />
      )}

      {user && (
        <Route
          path="admin/*"
          element={<AdminLayout logout={signout} />}
        />
      )}

      <Route
        path="admin/*"
        element={<Navigate to={location} />}
      />
      <Route path="admin" element={<Navigate to="dashboard" />} />
      <Route path="*" element={<Navigate to={user ? "/admin" : "/login"} />} />
    </Routes>
  );
}

export default App;
