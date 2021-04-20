import React from 'react';
import Header from './Header/Header';
import "./Body.css";
import {BrowserRouter as Router} from "react-router-dom";

export default function AppRoute() {
    return (
        <>
            <Router>
                <body>
                <Header />
                <div>
                </div>
                </body>
            </Router>
        </>
    )
}