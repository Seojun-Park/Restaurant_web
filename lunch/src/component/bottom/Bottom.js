import React from 'react';
import './Bottom.css'


const Bottom =()=>{
    return (
        <div className="mainBottom">
            <div>
                <div className="mainBottomTab">
                    <p className="white-content">
                       About This</p>
                    <p className="darkWhite-content">
                        This is about my side project. This is about my side project. This is about my side project.</p>
                </div>
                <div className="mainBottomTab">
                    <p className="white-content">
                        OPENING HOURS</p>
                    <div className="darkWhite-content" style={{"padding":"1rem"}}>
                        <p style={{ float: "left" }}>Mon</p><p style={{ float: "right" }}>9:00 AM - 6:00 PM</p>
                        <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Tue</p><p style={{ float: "right", marginTop: "0.3rem" }}>9:00 AM - 6:00 PM</p>
                        <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Wed</p><p style={{ float: "right", marginTop: "0.3rem" }}>9:00 AM - 6:00 PM</p>
                        <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Thu</p><p style={{ float: "right", marginTop: "0.3rem" }}>9:00 AM - 6:00 PM</p>
                        <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Fri</p><p style={{ float: "right", marginTop: "0.3rem" }}>9:00 AM - 6:00 PM</p>
                        <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Sat</p><p style={{ float: "right", marginTop: "0.3rem" }}>Closed</p>
                        <p style={{ clear: "both", float: "left", marginTop: "0.3rem" }}>Sun</p><p style={{ float: "right", marginTop: "0.3rem" }}>Closed</p>
                    </div>
                </div>
                <div className="mainBottomTab">
                    <p className="white-content">
                        Contact</p>
                    <div className="darkWhite-content" style={{"padding":"1rem" }} >
                        <div>Phone <br /> 010-0000-0000</div> <br />
                        <div>Website<br />http://google.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bottom;