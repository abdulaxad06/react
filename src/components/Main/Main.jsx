import React from "react";
import "../all.css"
import gul1 from "../../assets/gul.png"
import gul2 from "../../assets/gul1.png"
import gul3 from "../../assets/gul2.png"
import gul4 from "../../assets/gul3.png"
import gul5 from "../../assets/gul4.png"
import gul6 from "../../assets/gul5.png"
import gul7 from "../../assets/gul7.png"
import gul8 from "../../assets/gul8.png"
import gul9 from "../../assets/gul9.png"
import gul10 from "../../assets/gul10.png"
import gul11 from "../../assets/gul11.png"
import gul12 from "../../assets/gul12.png"
import gul13 from "../../assets/gul13.png"
import basket from "../../assets/basketCard.png"
import Emily from "../../assets/Emily.png"
import user1 from "../../assets/user1.png"
import user2 from "../../assets/user2.png"
import user3 from "../../assets/user3.png"
import star from "../../assets/star.png"







export function Main() {





    return (
        <main>
            <div className="section1">
                <div className="left">
                    <p>Flowers, 🌻 <br />what the world <br /> needs </p>
                    <span>Browse between hounders of flowers</span>
                    <button>Browse</button>
                </div>
                <div className="right">
                    <img src={gul1} alt="" />
                    <img src={gul2} alt="" />
                    <img src={gul3} alt="" />
                    <img src={gul4} alt="" />
                    <img src={gul5} alt="" />
                    <img src={gul6} alt="" />
                </div>
            </div>
            <div className="section2">
                <div className="top">
                    <button></button>
                    <p>Best selers</p>
                    <button></button>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={gul7} alt="" />
                        <p>Snowdrop</p>
                        <div className="bottom">
                            <span>5$</span>
                            <button><img src={basket} alt="" />Add to card</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={gul8} alt="" />
                        <p>Sun flower</p>
                        <div className="bottom">
                            <span>5$</span>
                            <button><img src={basket} alt="" />Add to card</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={gul9} alt="" />
                        <p>White Rose</p>
                        <div className="bottom">
                            <span>5$</span>
                            <button><img src={basket} alt="" />Add to card</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={gul10} alt="" />
                        <p>Periwinkle</p>
                        <div className="bottom">
                            <span>5$</span>
                            <button><img src={basket} alt="" />Add to card</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="top">
                    <button></button>
                    <p>Latest posts</p>
                    <button></button>
                </div>
                <div className="down">
                    <div className="cart">
                        <div className="up">
                            <p> <img src={Emily} alt="" />Emily</p>
                            <span>24/08/2023</span>
                        </div>
                        <img src={gul11} alt="" />
                        <p>Best flowers for inside home</p>
                        <span>All the flowers are best for your lovly house
                            just get the one you love the most 😊</span>
                        <div className="bot">
                            <span>❤️28  👁71</span>
                            <a href="#">Read more</a>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="up">
                            <p> <img src={Emily} alt="" />Emily</p>
                            <span>24/08/2023</span>
                        </div>
                        <img src={gul12} alt="" />
                        <p>Best flowers for inside home</p>
                        <span>All the flowers are best for your lovly house
                            just get the one you love the most 😊</span>
                        <div className="bot">
                            <span>❤️15  👁57</span>
                            <a href="#">Read more</a>
                        </div>
                    </div>
                    <div className="cart">
                        <div className="up">
                            <p> <img src={Emily} alt="" />Emily</p>
                            <span>24/08/2023</span>
                        </div>
                        <img src={gul13} alt="" />
                        <p>Best flowers for inside home</p>
                        <span>All the flowers are best for your lovly house
                            just get the one you love the most 😊</span>
                        <div className="bot">
                            <span>❤️13 👁83</span>
                            <a href="#">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section4">
                <div className="top">
                    <button></button>
                    <p>Comments</p>
                    <button></button>
                </div>
                <div className="past">
                    <div className="carts">
                        <img src={user1} alt="" />
                        <div className="comment">

                            <p> Atena </p>
                            <span>i’m buying flower from them every weak, always fresh flowers and beutiful😍🌻... love’em so nuch..keep going 💯💯</span>
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carts">
                        <img src={user2} alt="" />
                        <div className="comment">

                            <p> Pop Boy </p>
                            <span>i get flowers from them for my baby mama, she love them so much 🔥💯</span>

                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carts">
                        <img src={user3} alt="" />
                        <div className="comment">

                            <p> Young Girl </p>
                            <span>Drip too hard, don't stand too close
                                You gon' fuck around and drown off this wave
                            </span>
                            <div className="star">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>



    )
}