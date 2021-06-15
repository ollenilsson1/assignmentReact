import React from 'react';
import Header from './Header/Header';
import Home from './LandingPage/Home';
import CardList from './Card/CardList';
import Login from './Login/Login';
import LogOut from './LogOut/LogOut';
import Register from './Register/Register';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';
import BookingList from './Booking/BookingList';
import AddService from './AddService/AddService';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Route, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from '../Auth';

import FireLogin from "./Login/FireLogin";
import FireRegister from "./Register/FireRegister";

export default function AppRoute() {
    
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/barber" exact component={CardList} />
                <Route path="/login" exact component={FireLogin} />
                <Route path="/logout" component={LogOut} />
                <Route path="/register" exact component={FireRegister} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
                <Route path="/resetpassword" component={ResetPassword} />
                <Route path="/mybookings" exact component={BookingList} />
                <Route path="/addservice" component={AddService} />
                <Route path="/contact" exact component={Contact} />
                <Footer/>
            </Router>
        </AuthProvider>
        
    )
}