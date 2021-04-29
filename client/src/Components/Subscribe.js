import React from "react";
import "../style/subscribe.css";




function Subscribe() {

    return (
        <div className="container">
                <div className="subscribe text-center">
                    <h2 className="signUp">Sign up for our newsletter</h2>
                    <h5 className="signUp">Recieve special offers and first look at new products.</h5>
                    <div className="form-group emailStuff pt-2 text-center">
                        <input type="text" className="form-control subscribeEmail" placeholder="Enter email" name="email" />
                        <span className="form-group mx-auto">
                            <button type="submit" className="formSubmit btn">Subscribe</button>
                        </span>
                    </div>
                </div>
        </div>
        
    )

}

export default Subscribe