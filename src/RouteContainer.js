import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./screens/home/home";
import Experience from "./screens/experience/experience";
import About from "./screens/about/about";

export default function RouteContainer() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/experience' element={<Experience/>}/>
        </Routes>
    );
}