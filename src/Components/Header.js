import React from "react";
import MovingComponent from "react-moving-text";

export default function Header(){

    return <nav className="nav">
        <a href="/" className="LOGO">My Simple GIPHy App</a>
        <ul>
            <li>
                <a href="/home"></a>
                <button className="btn btn-secondary"><a href="/Login">Login/Sign-Up</a></button>
            </li>
        </ul>
    </nav>

}