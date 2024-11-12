import {FaChevronRight , FaChevronLeft} from "react-icons/fa";
import { useEffect, useState } from "react";
import CarsouselCSS from "/src/Styles/Carousel.module.css"
import  {Link} from 'react-router-dom'

const Carousel=( {Category1, Category2, Category3, Category4, Category5 , pictures})=>{
    const [left , setLeft]=useState("35px");
    const [right , setRight]=useState("");
    const changeCSSRight=()=>{
        left=="35px" ? setLeft("-35%") : left=="-35%" ? setLeft("-75%") : ""
    }
    const changeCSSLeft=()=>{
        left=="-75%" ? setLeft("-35%") : left=="-35%" ? setLeft("35px") : ""
    }

    const [Pic, setPic] = useEffect("")
    const click = ()=>{console.log(pictures.Images[1].image1)}

useEffect(()=>{
    const Setting= async()=>{
        const Settings= await pictures.map((item)=>{item.Image1});
        setPic(Settings)
    } 
    Setting();
}, [])

    return(
<article>
<div className={CarsouselCSS["Categories-Header"]} >
<h1 onClick={()=>{console.log(Pic)}}>Shop by Category</h1>
<div className= {CarsouselCSS["Categories-FontAwesome"]} >
<i  onClick={changeCSSLeft}><FaChevronLeft className= {CarsouselCSS["FontAwesome-Categories"]} /></i>
<i onClick={changeCSSRight}><FaChevronRight className={CarsouselCSS["FontAwesome-Categories"]}/></i>
</div>
</div>
<div className= {CarsouselCSS["Category-Content"]}  style={{left, right, transition: " 0.5s ease-in-out" , }}>
<Link to='/Products'>
<div className={CarsouselCSS["Image"]}>
    <img src={""} alt=""  />
    <div className= {CarsouselCSS["Image-Text"]}>
    <h1>{Category1} </h1> <FaChevronRight/>
    </div>
</div>
</Link>
<Link to='/Products'>
<div className= {CarsouselCSS["Image"]}>
    <img src="\bhood images\Category-Images\BHOOD-C2.jpg" alt="" />
    <div className= {CarsouselCSS["Image-Text"]} >
    <h1>{Category2} </h1> 
    <FaChevronRight/>
    </div>
</div>
</Link>
<Link to='/Products'>
<div className=  {CarsouselCSS["Image"]}>
<img src="\bhood images\Category-Images\BHOOD-C3.jpg" alt="" />
<div className={CarsouselCSS["Image-Text"]}>
    <h1>{Category3} </h1> 
    <FaChevronRight/>
    </div>
</div>
</Link>
<Link to='/Products'>
<div className= {CarsouselCSS["Image"]} >
<img src="\bhood images\Category-Images\BHOOD-C4.jpg" alt="" />
<div className= {CarsouselCSS["Image-Text"]}>
    <h1> {Category4}</h1> 
    <FaChevronRight/>
    </div>
</div>
</Link>
<Link to='/Products'>
<div className= {CarsouselCSS["Image"]}>
<img src="\bhood images\Category-Images\BHOOD-C5.jpg" alt="" />
<div className= {CarsouselCSS["Image-Text"]}>
    <h1>{Category5} </h1> 
    <FaChevronRight/>
    </div>
</div>
</Link>
</div>
</article>
)
}

export default Carousel