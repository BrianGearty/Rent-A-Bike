import React from "react";
import "../style/nav.css"
import { NavLink } from 'react-router-dom';



function Navigation() {

    return (
        <nav className="navbar navbar-expand-lg">
            <NavLink className="navbar-brand" to="/"><img className="logo" src="/images/rentABikeWhite.svg" alt ="Rent A Bike" width="200px"></img></NavLink>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span><img className="plusSign" src="/images/plus.svg" alt="Plus Sign" aria-hidden="true"></img></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/register">REGISTER</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/datadisplay">DATA DISPLAY</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/bike">BIKES</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/about">ABOUT US</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="navLink" data-toggle="collapse" data-target=".navbar-collapse.show" to="/contact">CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )

};


export default Navigation;
