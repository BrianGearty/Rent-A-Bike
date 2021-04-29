import React from "react";
import video from "../videos/181015_12b_Venice Beach_018.mp4";
import "../style/video.css"


function Video() {

    return (
        <div>
        <div className="container-fluid vidContainer">
            <video autoPlay loop playsInline muted src={video} />
    </div>
    <div className="middle heroText">
                                <div className="bgText">Any trip. Any time.</div><div className="bgTextSmall">Own the Jersey Shore.</div>
                            </div>
        </div>

    )

};


export default Video;
