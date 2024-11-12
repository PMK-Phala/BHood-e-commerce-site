import "./Top.css"
import Header from "./Header.jsx"
import {FaArrowRight, FaArrowLeft, FaChevronRight , FaChevronLeft} from "react-icons/fa";
import { useState } from "react";
const Top=()=>{
    const [left , setLeft]=useState("35px");
    const [right , setRight]=useState("");
    const changeCSSRight=()=>{
        left=="35px" ? setLeft("-35%") : left=="-35%" ? setLeft("-75%") : ""
    }
    const changeCSSLeft=()=>{
        left=="-75%" ? setLeft("-35%") : left=="-35%" ? setLeft("35px") : ""
    }
    return(<>
    <Header/>
    <div className="Home">
        <div className="First-Image">
            <img src="\bhood images\Top - Copy\1 (2).jpg" alt="" style={{height:"100%" , width:"100%"}} />
            <div className="First-Image-Text">
        <h1>BRTHRHOOD</h1>
        <h4 style={{height:"40px" , lineHeight:"40px" , paddingLeft:"5px"}}>SS '24</h4>
        </div>
            <div className="Add">
                    <div className="Add-1"></div>
                    <div className="Add-2"> <h2>Shop Men</h2> <FaArrowRight className="FaArrowRight"/></div>
                </div>
                <div className="Shop-Women">
                    <div className="Women-Box1"></div>
                    <div className="Women-Box2"> <h2>Shop Women</h2> <FaArrowRight className="FaArrowRight"/></div>
                </div>
        </div>
        <div className="Second-Image">
            <img src="\bhood images\Top - Copy\untitled-video-made-with-clipchamp_deWMx5rA.gif" alt="" style={{height:"100%" , width:"100%"}}/>
        </div>
        </div>
        <article>
            <div className="Categories-Header">
            <h1 onClick={changeCSSRight}>Shop by Category</h1>
            <div className="Categories-FontAwesome">
            <i  onClick={changeCSSLeft}><FaChevronLeft className="FontAwesome-Categories"/></i>
            <i onClick={changeCSSRight}><FaChevronRight className="FontAwesome-Categories"/></i>
            </div>
            </div>
            <div className="Category-Content" style={{left, right, transition: " 0.5s ease-in-out" , }}>
            <div className="Image 1">
                <img src="\bhood images\Category-Images\BHOOD-C1.jpg" alt="" />
                <div className="Image-Text">
                <h1>Sweatshirts </h1> <FaChevronRight/>
                </div>
            </div>
            <div className="Image 2">
                <img src="\bhood images\Category-Images\BHOOD-C2.jpg" alt="" />
                <div className="Image-Text">
                <h1>T-Shirts </h1> <FaChevronRight/>
                </div>
            </div>
            <div className="Image 3">
            <img src="\bhood images\Category-Images\BHOOD-C3.jpg" alt="" />
            <div className="Image-Text">
                <h1>TrackSuit </h1> <FaChevronRight/>
                </div>
            </div>
            <div className="Image 4">
            <img src="\bhood images\Category-Images\BHOOD-C4.jpg" alt="" />
            <div className="Image-Text">
                <h1>Essentials </h1> <FaChevronRight/>
                </div>
            </div>
            <div className="Image 5">
            <img src="\bhood images\Category-Images\BHOOD-C5.jpg" alt="" />
            <div className="Image-Text">
                <h1>Bennies </h1> <FaChevronRight/>
                </div>
            </div>
            </div>
        </article>
        </>
    )
}

export default Top;

