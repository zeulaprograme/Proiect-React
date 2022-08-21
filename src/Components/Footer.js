import React from "react";
import MovingComponent from "react-moving-text";

const Footer = () => {
    return (

        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column 1*/}
                    <div className="col">
                        <MovingComponent
                            type="fadeOutToLeft"
                            duration="1000ms"
                            delay="0s"
                            direction="reverse"
                            timing="ease-in-out"
                            iteration="1"
                            fillMode="forwards">
                            <h4>Try searching for:</h4>
                            <ul className="footer-list">
                                <li>Funny</li>
                                <li>Puppy</li>
                                <li>Fails</li>
                            </ul>
                        </MovingComponent>

                    </div>
                    {/*Column 1*/}
                    <div className="col">
                        <MovingComponent
                            type="fadeOutToBottom"
                            duration="1000ms"
                            delay="0s"
                            direction="reverse"
                            timing="ease-in-out"
                            iteration="1"
                            fillMode="forwards">
                            <h4>Current Date</h4>
                            <li>{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}</li>
                        </MovingComponent>

                    </div>
                    {/*Column 1*/}
                    <div className="col">
                        <MovingComponent
                            type="fadeOutToRight"
                            duration="1000ms"
                            delay="0s"
                            direction="reverse"
                            timing="ease-in-out"
                            iteration="1"
                            fillMode="forwards">
                            <h4>Subscribe for daily funny GIFs</h4>
                            <form>
                                <input type="text" placeholder="your email adress"></input>
                                <button className="btn btn-secondary mx-2">Submit</button>
                            </form>
                        </MovingComponent>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Footer;