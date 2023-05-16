import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header.components';
import HomePage from './pages/homepage/homepage.component';
import SidebarPage from './pages/sidebar/sidebarPage.component';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={HomePage} />
        <Route path='/sidebar' element={SidebarPage} />
      </Routes>
    </div>
  );
}

export default App;
