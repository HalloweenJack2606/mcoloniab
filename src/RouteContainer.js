import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import Home from './Pages/home/Home';
import Projects from './Pages/projects/Projects';

export default function RouteContainer() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/projects" element={<Projects/>}>Home</Route>
    </Routes>
  )
}
