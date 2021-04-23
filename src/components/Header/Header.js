import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="lg:px-16 px-6 bg-gray-700 flex flex-wrap items-center lg:py-0 py-2">
                <div className="flex-1 flex justify-between items-center">
                    <Link to="/">
                        <svg id="Capa_1" enableBackground="new 0 0 512 512" height="36" viewBox="0 0 512 512" width="32" xmlns="http://www.w3.org/2000/svg"><g><path d="m237.287 125.29-74.644 74.645v74.701l149.346-149.346z" fill="#eaeaea" /><path d="m293.408 143.871 18.581-18.581h-74.702l-18.58 18.581z" fill="#cbcbcb" /><path d="m349.357 162.623-186.714 186.714v37.373h37.329l149.385-149.386z" fill="#eaeaea" /><path d="m349.357 386.71v-74.684l-74.684 74.684z" fill="#eaeaea" /><path d="m162.643 368.129v18.581h37.329l18.581-18.581z" fill="#cbcbcb" /><path d="m293.254 368.129-18.581 18.581h74.684v-18.581z" fill="#cbcbcb" /><path d="m162.643 125.29v74.645l74.644-74.645z" fill="#dd636e" /><path d="m349.357 125.29h-37.368l-149.346 149.346v74.701l186.714-186.714z" fill="#dd636e" /><path d="m218.707 143.871 18.58-18.581h-74.644v18.581z" fill="#da4a54" /><path d="m349.357 143.871v-18.581h-37.368l-18.581 18.581z" fill="#da4a54" /><path d="m349.357 312.026v-74.702l-149.385 149.386h74.701z" fill="#dd636e" /><path d="m218.553 368.129-18.581 18.581h74.701l18.581-18.581z" fill="#da4a54" /><g><path d="m352.838 90.875c-3.18-50.72-45.316-90.875-96.838-90.875s-93.658 40.155-96.838 90.875z" fill="#80b4fb" /></g><path d="m162.154 72.294c-1.574 5.987-2.592 12.2-2.992 18.581h193.676c-.4-6.381-1.418-12.593-2.992-18.581z" fill="#61a2f9" /><g><path d="m352.838 421.125c-3.18 50.72-45.316 90.875-96.838 90.875s-93.658-40.155-96.838-90.875z" fill="#80b4fb" /></g><path d="m349.846 439.706c1.574-5.987 2.592-12.2 2.992-18.581h-193.676c.4 6.38 1.418 12.593 2.992 18.581z" fill="#61a2f9" /><path d="m356.33 90.875h-200.66c-9.504 0-17.208 7.704-17.208 17.208 0 9.504 7.704 17.208 17.208 17.208h200.66c9.504 0 17.208-7.704 17.208-17.208 0-9.504-7.704-17.208-17.208-17.208z" fill="#8c808a" /><path d="m356.33 108.083h-200.66c-6.366 0-11.91-3.466-14.887-8.604-1.467 2.533-2.321 5.466-2.321 8.604 0 9.504 7.704 17.208 17.208 17.208h200.66c9.504 0 17.208-7.704 17.208-17.208 0-3.138-.854-6.071-2.321-8.604-2.976 5.138-8.521 8.604-14.887 8.604z" fill="#7b7179" /><path d="m356.33 421.125h-200.66c-9.504 0-17.208-7.704-17.208-17.208 0-9.504 7.704-17.208 17.208-17.208h200.66c9.504 0 17.208 7.704 17.208 17.208 0 9.504-7.704 17.208-17.208 17.208z" fill="#8c808a" /><path d="m356.33 403.918h-200.66c-6.366 0-11.91-3.465-14.887-8.604-1.467 2.533-2.321 5.466-2.321 8.604 0 9.504 7.704 17.208 17.208 17.208h200.66c9.504 0 17.208-7.704 17.208-17.208 0-3.138-.854-6.071-2.321-8.604-2.976 5.138-8.521 8.604-14.887 8.604z" fill="#7b7179" /></g></svg>
                    </Link>
                </div>
                <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
                    <nav>
                        <ul className="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
                            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-300" to="/">Startsida</Link></li>
                            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-300" to="/barber">Frisör</Link></li>
                            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-300" to="/mybookings">Mina bokningar</Link></li>
                            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blue-300" to="/login">Logga in</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;