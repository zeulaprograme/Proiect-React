import React from "react";
import Giphy from "./Components/Giphy"
import "./Assets/myStyle.css"
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const App = () => {

    return (
        <div className="App">
            <div className="header">
                <Header/>
            </div>
            <div className="body page-container">
                <Giphy />
            </div>
            <div className="main-footer">
                <Footer />
            </div>
        </div>
    )

};

export default App;