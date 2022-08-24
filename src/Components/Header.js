import React from "react";
import MovingComponent from "react-moving-text";
import "../Assets/myStyle.css"


//NAVBAR ff simplu
//Hyperlink-uri pentru /home aka Giphy.js si /Login pt eventuala pagina Login.js 
export default function Header(){

    return <nav className="nav">
        <a href="/" className="LOGO">My Simple GIPHy App</a>
        <ul>
            <li>
                <a href="/Home"><button className="btn btn-secondary">GIPHy</button></a>  
               <a href="/Login"> <button className="btn btn-secondary">Login/Sign-Up</button></a>
            </li>
        </ul>
    </nav>

}