import React from "react";
import Giphy from "./Components/Giphy"
import "./Assets/myStyle.css"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";

const App = () => {
    let component   
    switch (window.location.pathname) {
        case "/Login":
            component = <Login/>
            break;

        default:
            component = <div className="App">
                <div className="body page-container">
                    <Giphy />
                </div>
               
            </div>
            break;
    }
    return (
        <>
      <Header/>
      {component}
      <Footer/>
      </>
    )

};

export default App;