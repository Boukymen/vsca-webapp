import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home/home.jsx';
import User from './pages/user/user.jsx'
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
