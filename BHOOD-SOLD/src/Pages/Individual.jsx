import { FaShippingFast, FaLock, FaExchangeAlt, FaAngleUp , FaAngleDown, FaTimes, FaInfoCircle , FaSearchLocation } from "react-icons/fa";
import IndividualCSS from '/src/Styles/Individual.module.css'
import Photo from "../Components/Photo" 
import {useState} from 'react'

function Individual (){ 
    const [Display1, setDisplay1] = useState(false);
    const [Display2, setDisplay2] = useState(false);
    const [SizeChart, setSizeChart]= useState(false);
    const [ProductDisplay , setProductDisplay]=useState(false)

    const display1Function=()=>{
        setDisplay1(!Display1);
    }
    const display2Function=()=>{
        setDisplay2(!Display2);
    }
    const handleSizeChart=()=>{
        setSizeChart(!SizeChart);
        console.log(SizeChart) 
    } 

   const handleDisplay=()=>{
    setProductDisplay(!ProductDisplay);
    console.log(ProductDisplay)
   }
    return(
        <>
        <div className="yes">
        {ProductDisplay  && <Photo handleDisplay={handleDisplay}/>}
        </div>
        <div className={IndividualCSS["product-container"]}>
            
            <div className={IndividualCSS["product-image"]} onClick={handleDisplay}>
                <div className={IndividualCSS["bhood-1"]}>
                <img src="/bhood images/1.jpg" 
                alt=""
                style={{width:"100%"}} />
                
                </div>

                <div className={IndividualCSS["bhood-2"]}>
                <img src="/bhood images/2.jpg" alt="" style={{width:"100%"}} />
                </div>

                <div className={IndividualCSS["bhood-3"]}>
                <img src="/bhood images/3.jpg" alt="" style={{width:"100%"} }/>
                </div>
                 </div>

            <div className={IndividualCSS["Product-Description"]}>
                <h1 className={IndividualCSS["Product-Heading"]} >BHOOD SKIPA</h1>
                <h3 className={IndividualCSS["Product-Price"]}>R 450.00 ZAR </h3>
                <br /> <br />

                <div className={IndividualCSS["Size-Heading"]}>
                <h2>Select Size:</h2>
                <h4 style={{color:"gray"}} onClick={()=>handleSizeChart()} >Size Chart <FaInfoCircle style={{color:"black"}}/></h4>
                </div> 

                <div className={IndividualCSS["Size-Chart"]}>
                    <p className={`${IndividualCSS.Size}`}>S</p>
                    <p className={`${IndividualCSS.Size}`}>M</p>
                    <p className={`${IndividualCSS.Size}`}>L</p>
                    <p className={`${IndividualCSS.Size}`}>XL</p>
                </div>

                <div className={IndividualCSS["Sold-Out"]}> 
                    <div className={IndividualCSS["Sold-Out-Text"]}>
                    <p>Sold Out</p> <p>Sold Out</p> <p>Sold Out</p> <p>Sold Out</p>
                </div>
                </div>

        <br />
                <div className={IndividualCSS["Add"]}>
                    <div className={IndividualCSS["Add-1"]}></div>
                    <div className={IndividualCSS["Add-2"]}> <h2>Add To Cart</h2> </div>
                </div>
        <br /> <br />
            <div className={IndividualCSS["Extra-Info"]}>
            <FaShippingFast icon="fal fa-shipping-fast" /> <p>Delivery Withing xx-xx Business Days </p>
            </div>
            <br />
            <div className={IndividualCSS["Extra-Info"]}>
            <FaLock FaLock="fa-regular fa-lock" /> <p>Secure Transactions</p>
            </div>
            <br />
            <div className={IndividualCSS["Extra-Info"]}>
                <FaExchangeAlt/> <p>Hassle Free Exchange Policy on Faulty Products</p>
            </div>
            <br />
            <div className={IndividualCSS["Extra-Info"]}>
                <FaSearchLocation style={{color:""}}/> <p> Pick-Up available at <span style={{fontWeight:"bold" , cursor:"pointer"}}> THATCHFIELD SHOPPING CENTRE</span></p>
            </div>
        <br />


        <div className={IndividualCSS["Detailed-Description"]}>

            <div className={`${IndividualCSS.Detailed} ${IndividualCSS.Product}`} >
                <div className={IndividualCSS["Detailed-Header"]} onClick={display1Function}>
                <h2> Product Details</h2> {Display1?  <FaAngleUp className={`${IndividualCSS.FaAngleUp}`}/> :<FaAngleDown className={`${IndividualCSS.FaAngleDown}`}/>}
                </div>
                <div style={{backgroundColor:"aliceblue"}}> <div>{Display1? (<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolore consectetur inventore quisquam pariatur. Ea at expedita eum quasi iusto ullam, doloribus reprehenderit maxime neque facere possimus voluptatum a! Similique.</p>):<p></p>}
                </div> 
                </div> 
            </div>

            <div className={`${IndividualCSS.Detailed} ${IndividualCSS.Details}`}>
                <div className={IndividualCSS["Detailed-Header"]} onClick={display2Function}>
                <h2> Product Details</h2> {Display2?  <FaAngleUp className={IndividualCSS["FaAngleUp"]}/> :<FaAngleDown className={`${IndividualCSS.FaAngleDown}`}/>}
                </div>
                <div style={{backgroundColor:"aliceblue"}}> <div>{Display2? (<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolore consectetur inventore quisquam pariatur. Ea at expedita eum quasi iusto ullam, doloribus reprehenderit maxime neque facere possimus voluptatum a! Similique.</p>):<p></p>}
                </div>
                </div>
            </div>
            </div>
            </div> 
        </div>
        {SizeChart &&  (<div className={IndividualCSS["Size-Table"]}>
    <div className={IndividualCSS["Table-Heading"]}>
        <FaTimes className={IndividualCSS["FaTimes-Table"]} onClick={handleSizeChart}/>
    </div>
    <div className={`${IndividualCSS.Table}`}>
        <table>
            <tr>
                <th >Size</th>
                <th>Waist</th>
                <th>Hip</th>
            </tr>
            <tr >
                <td>XS</td>
                <td>24-25.5</td>
                <td>24-25.5</td>
            </tr>
            <tr>
                <td>S</td>
                <td>24-25.5</td>
                <td>24-25.5</td> 
            </tr>
            <tr>
                <td>M</td>
                <td>24-25.5</td>
                <td>24-25.5</td>
            </tr>
            <tr >
                <td>L</td>
                <td>24-25.5</td>
                <td>24-25.5</td>
            </tr>

        </table>
        <div className={IndividualCSS["Table-Footer"]}>
            <p>For any inquiries concerning size and fit, please contact us at info@gmail.com</p>
         </div>
    </div>
 </div>
 )}
        </>
    )
}

export default Individual 