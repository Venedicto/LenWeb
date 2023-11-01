import { Route , Routes , Navigate  } from "react-router-dom";
import React from 'react'
import { Home } from "../pages/Home";
import { Tarot } from "../pages/Tarot";
import { Spells } from "../pages/Spells";
import { Admin } from "../pages/Admin";


function Public() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/home'/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/Tarot" element={<Tarot />} />
        <Route path="/Spells" element={<Spells />} />
        <Route path="/Admin" element={<Admin />} />

    </Routes>
  )
}
export default Public