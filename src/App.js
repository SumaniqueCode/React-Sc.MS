import logo from './Components/Images/logo.png';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/User/Layout/navbar';
import ContactUs from './Components/User/Pages/contactUsPage';
import Profile from './Components/User/Pages/profilePage';
import Services from './Components/User/Pages/servicesPage';
import AboutUs from './Components/User/Pages/aboutPage';
import PageNotFound from './Components/PageNotFound';
function App() {
  return (
    <Router>
    <div className="App my-3">
      <div className='flex'>
      <img className='w-24 ms-auto' src={logo} />
      <h1 className='text-3xl font-semibold font-serif italic text-blue-500 me-auto my-auto'>School Management System</h1>
      </div>
      <Navbar/>
      <Routes>
      <Route path="/" src="/index.js" />
        <Route path="/home" src="/index.js" />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path = '*' element ={<PageNotFound />}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
