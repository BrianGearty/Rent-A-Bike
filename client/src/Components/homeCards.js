import React from "react";


function homeCards() {

    return (
        <div>
            <div class="container-fluid text-center">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card-block px-2">
                            <p class="card-text">Weve got electric bikes.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img src="/images/rentBike.svg" className="img-fluid" alt="pic"></img>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-lg-6">
                        <img src="/images/rentBike.svg" className="img-fluid missionPics" alt="pic"></img>
                    </div>
                    <div class="col-md-3">
                        <div class="card-block px-2">
                            <p class="card-text-2">Weve got traditional beach cruisers</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card-block px-2">
                            <p class="card-text">We drop them off to you and when you're done we pick them up.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img src="/images/rentBike.svg" className="img-fluid" alt="pic"></img>
                    </div>
                </div>
            </div>
            <div className="container-fluid howitWorks">
                <h1 className="howRentWorks">How Rent A Bike Works</h1>
                <div className="row">
                    <div className="col-md-4 imgDiv">
                        <figure className="figure">
                            <img src="/images/register-icon.svg" width="400px" className="figure-img img-fluid rounded cardImage homeIcon" alt="Bike by the beach"></img>
                            <div className="middle">
                                <div className="text">Register</div>
                            </div>
                            <figcaption className="figure-caption">Register with us to find availability of our fleet!</figcaption>
                            <a className="iconCaption" href="/register">➡︎ Register Here</a>
                        </figure>
                    </div>
                    <div className="col-md-4 imgDiv">
                        <figure className="figure">
                            <img src="/images/rideBike.svg" width="500px" className="figure-img img-fluid rounded cardImage homeIcon" alt="Bike by the beach"></img>
                            <div className="middle">
                                <div className="text">Ride</div>
                            </div>
                            <figcaption className="figure-caption">Enjoy the ride!</figcaption>
                            <a className="iconCaption" href="/bike">➡︎Check Out Our Fleet</a>
                        </figure>
                    </div>
                    <div className="col-md-4 imgDiv">
                        <figure className="figure">
                            <img src="/images/lockIcon.svg" className="figure-img img-fluid rounded cardImage homeIcon" alt="Rent A Bike"></img>
                            <div className="middle">
                                <div className="text">Return</div>
                            </div>
                            <figcaption className="figure-caption">When you're done lock it up take a picture and we'll come pick it up.</figcaption>
                            <a className="iconCaption" href="/bike">➡︎ Pricing Details</a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default homeCards;