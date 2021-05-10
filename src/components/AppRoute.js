import React from 'react';
import Header from './Header/Header';
import Home from './LandingPage/Home';
import CardList from './Card/CardList';
import Login from './Login/Login';
import LogOut from './LogOut/LogOut';
import Register from './Register/Register';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';
import BookingForm from './Booking/BookingForm';
import Mybookings from './Booking/Mybookings';
import AddService from './AddService/AddService';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function AppRoute() {
    return (
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/barber" exact component={CardList} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" component={LogOut} />
                <Route path="/register" exact component={Register} />
                <Route path="/forgotpassword" exact component={ForgotPassword} />
                <Route path="/booking" component={BookingForm} />
                <Route path="/resetpassword" component={ResetPassword} />
                <Route path="/mybookings" exact component={Mybookings} />
                <Route path="/addservice" component={AddService} />
                <Route path="/contact" exact component={Contact} />
                <Footer/>
            </Router>
        
    )
}