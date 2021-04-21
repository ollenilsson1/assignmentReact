import React from 'react';
import Header from './Header/Header';
import CardList from './Card/CardList';
import "./Body.css";
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function AppRoute() {
    return (
        <body>
            <Router>
                <Header />
                <Route path="/barber" exact component={CardList} />
            </Router>
        </body>
    )
}