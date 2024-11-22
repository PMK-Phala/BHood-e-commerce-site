import {FaChevronRight , FaChevronLeft} from "react-icons/fa";
import { useEffect, useState } from "react";
import CarsouselCSS from "/src/Styles/Carousel.module.css"
import  {Link} from 'react-router-dom'

const Carousel=( {Category1, Category2, Category3, Category4, Category5 })=>{
    const [left , setLeft]=useState("35px");

    const [right , setRight]=useState("");

    const changeCSSRight=()=>{
        left=="35px" ? setLeft("-35%") : left=="-35%" ? setLeft("-75%") : ""
    }

    const changeCSSLeft=()=>{
        left=="-75%" ? setLeft("-35%") : left=="-35%" ? setLeft("35px") : ""
    }

    return(
<article>
<div className={CarsouselCSS["Categories-Header"]} >
        <h1 className={CarsouselCSS["Header-Text"]}> <span>Shop by </span>Category</h1>
    <div className= {CarsouselCSS["Categories-FontAwesome"]} >
        <i  onClick={changeCSSLeft}>
            <FaChevronLeft className= {CarsouselCSS["FontAwesome-Categories"]} />
        </i>
        <i onClick={changeCSSRight}>
            <FaChevronRight className={CarsouselCSS["FontAwesome-Categories"]}/>
        </i>
    </div>
</div>

<div className= {CarsouselCSS["Category-Content"]}  style={{left, right, transition: " 0.5s ease-in-out" , }}>
    <Link to='/Products'>
        <div className={CarsouselCSS["Image"]}>
            <img src="\bhood images\Category-Images\BHOOD-C1.jpg" alt=""  />
        <div className= {CarsouselCSS["Image-Text"]}>
            <h1 className={CarsouselCSS["Text"]}>{Category1} </h1> <FaChevronRight className={CarsouselCSS["Right"]}/>
        </div>
        </div>
    </Link>
<Link to='/Products'>
    <div className= {CarsouselCSS["Image"]}>
        <img src="\bhood images\Category-Images\BHOOD-C2.jpg" alt="" />
        <div className= {CarsouselCSS["Image-Text"]} >
             <h1 className={CarsouselCSS["Text"]}> {Category2} </h1> 
            <FaChevronRight className={CarsouselCSS["Right"]}/>
        </div>
    </div>
</Link>
<Link to='/Products'>
    <div className=  {CarsouselCSS["Image"]}>
        <img src="\bhood images\Category-Images\BHOOD-C3.jpg" alt="" />
    <div className={CarsouselCSS["Image-Text"]}>
        <h1 className={CarsouselCSS["Text"]}>{Category3} </h1> 
        <FaChevronRight className={CarsouselCSS["Right"]}/>
    </div>
    </div>
</Link>
<Link to='/Products'>
    <div className= {CarsouselCSS["Image"]} >
        <img src="\bhood images\Category-Images\BHOOD-C4.jpg" alt="" />
    <div className= {CarsouselCSS["Image-Text"]}>
        <h1 className={CarsouselCSS["Text"]}> {Category4}</h1> 
        <FaChevronRight className={CarsouselCSS["Right"]}/>
    </div>
    </div>
</Link>
<Link to='/Products'>
    <div className= {CarsouselCSS["Image"]}>
        <img src="\bhood images\Category-Images\BHOOD-C5.jpg" alt="" />
        <div className= {CarsouselCSS["Image-Text"]}>
            <h1 className={CarsouselCSS["Text"]}>{Category5} </h1> 
            <FaChevronRight className={CarsouselCSS["Right"]}/>
        </div>
    </div>
</Link>
</div>
</article>
)
}

export default Carousel