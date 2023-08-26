import React from "react";
import basket from "../../assets/basket.png"
import user from "../../assets/user.png"
import "../../components/all.css"


export function Nav() {





    return (
        <nav>
            <div className="logo">
                <p><span>Flower </span> Shop</p>
            </div>
            <div className="link">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Blog</a>
                <a href="#">About</a>
            </div>
            <div className="basket">
                <img src={user} alt="" />
                <img src={basket} alt="" />
            </div>

        </nav>



    )
}