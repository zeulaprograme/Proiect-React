import React from "react";
import Giphy from "./Components/Giphy"
import "./Assets/myStyle.css"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Components/Login";

const App = () => {
    let component  // Tentativa de meniu cu Routing 
    switch (window.location.pathname) {
        case "/Login":      //In caz ca este apasat butonul de Login
            component = <Login/> // Pagina Login o sa incerc s-o termin din Grecia :)) 
            break;

        default: //GIPHy API apare pe aplicatie din default
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