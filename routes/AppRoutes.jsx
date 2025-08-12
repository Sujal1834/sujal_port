import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Project from '../src/components/Project.jsx'
import Home from '../src/components/Home.jsx';
import Header from '../src/components/Header.jsx';

function AppRoutes() {

  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={
            <>
            <Header/>
            <Project/>
            </>
        } />
    </Routes>
  );
}

export default AppRoutes;
