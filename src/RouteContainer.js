import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

export default function RouteContainer() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/projects" element={<Projects/>}>Home</Route>
    </Routes>
  )
}
