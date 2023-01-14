import React from 'react'
import vg from "../Assets/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className='Home' id='Home'>
                <main>
                    <h1>Techstar</h1>
                    <p>Solution to all your problems</p>
                </main>


            </div>
            <div className="Home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, molestiae. Autem optio, dolorum nihil animi adipisci recusandae numquam voluptates quidem at dolorem ducimus quia quam error iste. Pariatur, recusandae illo.
                    </p>
                </div>
            </div>

            <div className="Home3" id="About">
                <div>
                    <h1>Who we are ?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quasi natus debitis, beatae ullam eligendi sit. Vel nihil illo, dolor delectus reiciendis officia totam harum repellat, quia laudantium sit rerum!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quasi natus debitis, beatae ullam eligendi sit. Vel nihil illo, dolor delectus reiciendis officia totam harum repellat, quia laudantium sit rerum!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quasi natus debitis, beatae ullam eligendi sit. Vel nihil illo, dolor delectus reiciendis officia totam harum repellat, quia laudantium sit rerum!
                    </p>
                </div>
            </div>

            <div className="Home4" id='Brand'>
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>

        </>
    );
};

export default Home;