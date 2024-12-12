import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./../pages/Home"
import Heritage from './../pages/Heritage'
import HeritageDetails from '../pages/HeritageDetails'
import About from '../pages/About'
import LoginPage from "../components/Auth/LoginPage"
import SignupPage from '../components/Auth/SignupPage'
import ContactUs from '../pages/ContactUs';
import Faqs from "../components/Faqs";
import PrivacyPolicy from "../components/PrivacyPolicy"
import TermsPage from "../components/TermsPage";


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />

            <Route path='/home' element={<Home />} />

            <Route path='/about' element={<About />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path='/heritage' element={<Heritage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            <Route path='/heritage/:id' element={<HeritageDetails />} />

        </Routes>
    )
}

export default Routers