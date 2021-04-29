import React from "react";
import "../style/home.css";
import HomeCards from "../Components/homeCards";
import Subscribe from "../Components/Subscribe";
import Video from "../Components/Video";
import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {
    return (
        <div>
            <div class="container-fluid">
                <Video />
            </div>
            <br />
            <br />
            <br />
            <br />
            <HomeCards />
            <br />

            <Subscribe />
            <br />
        </div>

    );
}



export default Home;