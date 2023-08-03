import Home from "./Home";
import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Python from "./Languages";
import Languages from "./Languages";
import Searched from "./Searched";

function Pages() {
  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/languages/:type" element={<Languages/>}/>
            <Route path="/searched/:search" element={<Searched/>}/>
        </Routes>
  );
}


export default Pages