import React from 'react';
import Header from './Header/Header';
import Card from './Card';
import "./Body.css";
import {BrowserRouter as Router} from "react-router-dom";

export default function AppRoute() {
    return (
        <>
            <Router>
                <body>
                <Header />
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                </body>
            </Router>
        </>
    )
}