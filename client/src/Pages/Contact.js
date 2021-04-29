import React from "react";
// import './style.css';



function Contact() {

    return (
        <div className="contactFade">
        <div className="container email-container email-bg-pic">
            <header className="education email-header">
                <div className="row">
                    <div className="col-md-12 ">
                        <h2 className="email-title helllo text-center">CONTACT US</h2>
                        <p className="emailText">Thank you for your interest in Rent A Bike NJ. Please fill out the brief form below to contact our team. For any inquiries on prices please use our <a className="" href="/bike">➡︎ Pricing Details</a></p>
                    </div>
                </div>
            </header>

            <form >
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control email-window" placeholder="Name" name="name" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control email-window" placeholder="Email Address" name="email" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control email-window" placeholder="Subject" name="subject" />
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control email-window" type="text" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                    </div>
                    <div className="col-8 form-group mx-auto">
                        <input type="submit" className="btn btn-email-send" value="Contact Rent A Bike"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>

    )

};


export default Contact;
