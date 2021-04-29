import React from "react";
import "../style/bike.css";



function Bike() {

    return (
        <div className="container">
            <h2 className="bikeHeader">Our Fleet</h2>
            <div className="accordion edu-accordion" id="accordionExample">
                {/* Card One */}
                <div className="card bg-dark">
                    <h2 className="mb-0 bikeName">
                        Super73 Z1
                        </h2>
                    <div className="card-header" id="headingOne">
                        <button
                            className="btn btn-link edu-btn edu-btn-text"
                            id="btn-1"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                        >
                            <img
                                src="/images/super73S1.jpeg"
                                alt="leaf-bullet-point"
                                className="leaf-accordion-bullet-point"
                            />
                        </button>

                    </div>
                    <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body edu-card-body">
                            <p className="bikeStyleText">
                                The SUPER73-S1 is a rugged utility urban cruiser. The S1 is equipped with a durable and removable 768 watt-hour battery, a bright LED headlight, brake light, and rear cargo rack wrapped in a timeless design. The S1's versatility has helped it become one of the most recognizable bikes in the SUPER73 lineup.
                            </p>
                            <p className ="bikeTableHeader">Pricing</p>
                            <table className='table'>
                            <tbody>
                                <tr>
                                    <th><h2 className="bikeTableHeader">1 Day</h2></th>
                                    <th><h2 className="bikeTableHeader">2 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">3 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">4 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">5 Days</h2></th>
                                </tr>
                            </tbody>
                            <tbody>
                                        <tr>
                                            <td><h4 className="bikePrice">$70</h4></td>
                                            <td><h4 className="bikePrice">$134</h4></td>
                                            <td><h4 className="bikePrice">$195</h4></td>
                                            <td><h4 className="bikePrice">$252</h4></td>
                                            <td><h4 className="bikePrice">$300</h4></td>
                                        </tr>
                                    </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <br />

                {/* Card Two */}
                <div className="card bg-dark">
                    <h2 className="mb-0 bikeName">
                        Super73 S2
                        </h2>
                    <div className="card-header" id="headingTwo">
                        <button
                            className="btn btn-link collapsed edu-btn-text"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <img
                                src="/images/super73S2.jpeg"
                                alt="leaf-bullet-point"
                                className="leaf-accordion-bullet-point"
                            />
                        </button>
                    </div>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body edu-card-body">
                            <p className="bikeStyleText">
                                The Super73-S2 is a high performance street-legal electric motorbike that does not require a license or registration. Designed for the urban adventurer, the agile S2 is a sport-cruiser style motorbike built with an aircraft-grade aluminum alloy frame and a fully adjustable air spring suspension fork. The S2 also features Super73's all-new connected electronics suite that is compatible with iOS and Android mobile devices through the new Super73 App.
                        </p>
                        <p className ="bikeTableHeader">Pricing</p>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th><h2 className="bikeTableHeader">1 Day</h2></th>
                                    <th><h2 className="bikeTableHeader">2 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">3 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">4 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">5 Days</h2></th>
                                </tr>
                            </tbody>
                            <tbody>
                                        <tr>
                                            <td><h4 className="bikePrice">$70</h4></td>
                                            <td><h4 className="bikePrice">$134</h4></td>
                                            <td><h4 className="bikePrice">$195</h4></td>
                                            <td><h4 className="bikePrice">$252</h4></td>
                                            <td><h4 className="bikePrice">$300</h4></td>
                                        </tr>
                                    </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <br />
                {/* Card Three */}
                <div className="card bg-dark">
                    <h2 className="mb-0 bikeName">
                        Crew Dart
                        </h2>
                    <div className="card-header" id="headingThree">
                        <button
                            className="btn btn-link collapsed edu-btn-text"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <img
                                src="/images/crewDart.jpeg"
                                alt="leaf-bullet-point"
                                className="leaf-accordion-bullet-point"
                            />
                        </button>
                    </div>
                    <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body edu-card-body">
                            <p className="bikeStyleText">
                                You can't help but smile when riding on a Crew Dart! Powered by a 750w rear hub motor, and equipped with a 48v, 7.8Ah lithium-ion battery, the Crew Dart will convert you into an ebike enthusiast.
                                The frame and fork are full chromoly, and the double-wall 24" rims are wrapped with 24.x3.0" all-terrain tires. You can tackle the city streets, dirt trails, or gravel roads with ease. Use it to commute, take it camping, install a surf rack and head to the beach in no time! The Crew Dart 24" electric bike is the perfect bike to enjoy the outdoors.
                        </p>
                        <p className ="bikeTableHeader">Pricing</p>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th><h2 className="bikeTableHeader">1 Day</h2></th>
                                    <th><h2 className="bikeTableHeader">2 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">3 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">4 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">5 Days</h2></th>
                                </tr>
                            </tbody>
                            <tbody>
                                        <tr>
                                            <td><h4 className="bikePrice">$70</h4></td>
                                            <td><h4 className="bikePrice">$134</h4></td>
                                            <td><h4 className="bikePrice">$195</h4></td>
                                            <td><h4 className="bikePrice">$252</h4></td>
                                            <td><h4 className="bikePrice">$300</h4></td>
                                        </tr>
                                    </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <br />
                {/* Card Four */}
                <div className="card bg-dark">
                    <h2 className="mb-0 bikeName">
                        Rad Runner Utility
                        </h2>
                    <div className="card-header" id="headingFour">
                        <button
                            className="btn btn-link collapsed edu-btn-text"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                        >
                            <img
                                src="/images/radRunnerUtility.jpeg"
                                alt="leaf-bullet-point"
                                className="leaf-accordion-bullet-point"
                            />
                        </button>
                    </div>
                    <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body edu-card-body">
                            <p className="bikeStyleText">
                                A total of 330 accessory combinations means your RadRunner can be uniquely yours. Compatible with our full suite of racks and platforms, and introducing our patent-pending Passenger Package and Center Console, you can accessorize to your heart's content to truly expand the bike's functionality.
                        </p>
                        <p className ="bikeTableHeader">Pricing</p>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th><h2 className="bikeTableHeader">1 Day</h2></th>
                                    <th><h2 className="bikeTableHeader">2 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">3 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">4 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">5 Days</h2></th>
                                </tr>
                            </tbody>
                            <tbody>
                                        <tr>
                                            <td><h4 className="bikePrice">$70</h4></td>
                                            <td><h4 className="bikePrice">$134</h4></td>
                                            <td><h4 className="bikePrice">$195</h4></td>
                                            <td><h4 className="bikePrice">$252</h4></td>
                                            <td><h4 className="bikePrice">$300</h4></td>
                                        </tr>
                                    </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <br />
                {/* Card Five */}
                <div className="card bg-dark">
                    <h2 className="mb-0 bikeName">
                        Sun Beach Cruiser
                        </h2>
                    <div className="card-header" id="headingFive">
                        <button
                            className="btn btn-link collapsed edu-btn-text"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                        >
                            <img
                                src="/images/sunCruiser.jpeg"
                                alt="leaf-bullet-point"
                                className="leaf-accordion-bullet-point"
                            />
                        </button>
                    </div>
                    <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-parent="#accordionExample"
                    >
                        <div className="card-body edu-card-body">
                            <p className="bikeStyleText">
                                Our Revolutions AL makes cruising even more fun with a new aluminum frame combined with the familiar ergonomics of the classic Revolutions line. This lightweight design is even easier to handle around town and helps to reduce effort on longer rides as well.
                        </p>
                        <p className ="bikeTableHeader">Pricing</p>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th><h2 className="bikeTableHeader">1 Day</h2></th>
                                    <th><h2 className="bikeTableHeader">2 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">3 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">4 Days</h2></th>
                                    <th><h2 className="bikeTableHeader">5 Days</h2></th>
                                </tr>
                            </tbody>
                            <tbody>
                                        <tr>
                                            <td><h4 className="bikePrice">$70</h4></td>
                                            <td><h4 className="bikePrice">$134</h4></td>
                                            <td><h4 className="bikePrice">$195</h4></td>
                                            <td><h4 className="bikePrice">$252</h4></td>
                                            <td><h4 className="bikePrice">$300</h4></td>
                                        </tr>
                                    </tbody>
                        </table>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    )

};


export default Bike;
