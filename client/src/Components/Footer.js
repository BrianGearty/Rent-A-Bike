import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import "../style/footer.css";



function Footer() {

    useEffect(() => {
        let mybutton = document.getElementsByClassName("arrowUp")[0];
        window.onscroll = function () { scrollFunction() };

        mybutton.style.display = "none";

        function scrollFunction() {
            if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }
    })

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    }


    //     useEffect(() => {
    //     const switchLogo =(() => {
    //         if(window.location.pathname === "/resume" || window.location.pathname === "/contact"){
    //             document.getElementsByClassName("blackLogo")[0].style.display = "none";
    //             }

    //         else {
    //             document.getElementsByClassName("whiteLogo")[0].style.display = "none";
    //         }
    //     })
    //     switchLogo();
    // })

    return (
        <footer>
            <h1 variant="info" onClick={topFunction} className="arrowUp" id="scrollBTN " title="Go to top">⬆︎</h1>
        <div className='container-fluid footer'>
            <div className="row-divided">
                <div className="col-lg-12">
                    <div>
                    <NavLink className="brand" to="/"><img className="logo" src="/images/rentBike.svg" alt="Bike by the Beach" width="200px"></img></NavLink>
                    </div>
                    <NavLink className="navLink footerNav" to="/register">REGISTER</NavLink>

                    <NavLink className="navLink footerNav" to="/datadisplay">DATA DISPLAY</NavLink>

                    <NavLink className="navLink footerNav" to="/about">ABOUT US</NavLink>

                    <NavLink className="navLink footerNav" to="/contact">CONTACT</NavLink>
                    <div className='socialLogo'>
                        <a href="https://www.facebook.com/brian.gearty.7/"><img src="/images/facebooklogowhite.svg" alt="facebook logo" width="30px" className="facebook aTag"></img></a>
                        <a href="https://www.instagram.com/briangearty/?hl=en"><img src="/images/instagramlogowhite.svg" alt="instagram logo" width="30px" className="instagram aTag"></img></a>
                        <a href="https://www.instagram.com/briangearty/?hl=en"><img src="/images/youtubelogowhite.svg" alt="youtube logo" width="30px" className="youtube aTag"></img></a>
                    </div>
                </div>

            </div>
            <h3 className="rightsReserved text-center">© 2021 Rent A Bike NJ. All Rights Reserved</h3>
        </div>
        </footer>
    );
}

export default Footer;