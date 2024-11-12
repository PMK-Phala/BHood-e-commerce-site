import {FaArrowRight, FaArrowLeft, FaChevronRight , FaChevronLeft} from "react-icons/fa";
import TopperCSS from "/src/Styles/Topper.module.css"
const Topper=()=>{
    return(<>
    <div className={TopperCSS["Home"]}>
    <div className={TopperCSS["First-Image"]}>
        <img src="\bhood images\Top - Copy\1 (2).jpg" alt="" style={{height:"100%" , width:"100%"}} />
        <div className={TopperCSS["First-Image-Text"]}>
    <h1>BRTHRHOOD</h1>
    <h4 style={{height:"40px" , lineHeight:"40px" , paddingLeft:"5px"}}>SS '24</h4>
    </div>
        <div className={TopperCSS["Add"]}>
                <div className={TopperCSS["Add-1"]}></div>
                <div className={TopperCSS["Add-2"]}> <h2>Shop Men</h2> <FaArrowRight className={TopperCSS["FaArrowRight"]}/></div>
            </div>
            <div className={TopperCSS["Shop-Women"]} >
                <div className={TopperCSS["Women-Box1"]} ></div>
                <div className= {TopperCSS["Women-Box2"]}> <h2>Shop Women</h2> <FaArrowRight className={TopperCSS["FaArrowRight"]}/></div>
            </div>
    </div>
    <div className= {TopperCSS["Second-Image"]}>
        <img src="\bhood images\Top - Copy\untitled-video-made-with-clipchamp_deWMx5rA.gif" alt="" style={{height:"100%" , width:"100%"}}/>
    </div>
    </div>
    </>)
}
export default Topper;