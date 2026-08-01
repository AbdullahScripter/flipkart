import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import WebLayout from './layouts/WebLayout/WebLayout';
import Home from './pages/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route  element={<WebLayout/>}>
    <Route path="/" element={<Home/>} />
    </Route>
    
    
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
