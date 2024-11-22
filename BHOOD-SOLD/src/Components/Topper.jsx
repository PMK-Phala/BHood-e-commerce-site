import {FaArrowRight, FaArrowLeft, FaChevronRight , FaChevronLeft} from "react-icons/fa";
import TopperCSS from "/src/Styles/Topper.module.css"
const Topper=()=>{
    return(<>
    <div className={TopperCSS["Home"]}>
    <div className={TopperCSS["First-Image"]}>
        <div className={TopperCSS["First-Image-Text"]}>
    <h1 className={TopperCSS["BHood"]}>BRTHRHOOD</h1>
    <h4 className={TopperCSS["SS"]}>SS '24</h4>
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
    </div>
    </div>
    </>)
}
export default Topper;