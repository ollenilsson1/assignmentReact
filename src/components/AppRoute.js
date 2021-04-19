import React from 'react';
import Header from './Header';
import { Route, BrowserRouter as Router } from "react-router-dom";

export default function AppRoute() {
    return (
        <>
            <Router>
                <Header />

            </Router>



        </>
    )
}