import React from "react";
import MovingComponent from "react-moving-text";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <MovingComponent
                    type="fadeInFromLeft"
                    duration="1000ms"
                    delay="0s"
                    direction="alternate"
                    timing="ease"
                    iteration="2"
                    fillMode="backwards">
                   <h3>My Basic GIPHy Application</h3>
                </MovingComponent>
            </div>
        </div>
    )
}
export default Header;