import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductCart from './Components/ProductCart';
import Header from './Components/Header';
import { useEffect } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate()


  useEffect(()=>{
    if (login===true) {
      navigate('/header')
    }else navigate('/login')
  },[login])

  return (
    <>
      <Routes>
        <Route path="/login" element={<Form login={login} setLogin={setLogin} />} />
          <Route path='/header' element={<Header />} />
      </Routes>

    </>
  )
}

export default App

