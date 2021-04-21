import React from 'react';
import Header from './Header/Header';
import Home from './LandingPage/Home';
import CardList from './Card/CardList';
import Login from './Login/Login';
import BookingForm from './Booking/BookingForm';
import "./Body.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function AppRoute() {
    return (
        <body>
            <Router>
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/barber" exact component={CardList} />
                <Route path="/login" exact component={Login} />
                <Route path="/booking" component={BookingForm} />
            </Router>
        </body>
    )
}