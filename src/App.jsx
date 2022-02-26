import './App.css'
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import Home from './pages/home/home.jsx';
import User from './pages/user/user.jsx'
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/me" element={<User />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
