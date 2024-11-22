import React from 'react'
import HeaderCSS from '/src/Styles/Header.module.css'
import {FaShoppingCart, FaHeart, FaSearch, FaBars, FaWindowClose} from "react-icons/fa"
import { useState } from 'react'

const Headerr = () => {

    const [display, setDisplay] = useState(true)

    const onDisplay=()=>{
        setDisplay(!display)
    }

  return (
    <nav className={HeaderCSS['Container']}>
        <div className={HeaderCSS["Logo"]}>
            <img src="public/bhood images/Top - Copy/B Logo.jpg" alt="" />
        </div>

         <ul className={HeaderCSS['Nav-Container']}>
            <li className={HeaderCSS['Nav-Item']}>
                <h1 className={HeaderCSS['Nav-Text']}>Home</h1>
            </li>
            <li className={HeaderCSS['Nav-Item']}>
                <h1 className={HeaderCSS['Nav-Text']}>Shop</h1>
            </li>
            <li className={HeaderCSS['Nav-Item']}>
                <h1 className={HeaderCSS['Nav-Text']}>Archives</h1>
            </li>
        </ul> 
     <div className={HeaderCSS['Try']}>
        { display ? <div className={HeaderCSS["Search"]}>
            <div className={HeaderCSS["Search-Bar"]}>
                <div className={HeaderCSS['Icon-Container']}>
                <FaSearch className={HeaderCSS['Searh-Icon']}/>
                </div>
                <input 
                type="text"
                id={HeaderCSS['Input']}
                placeholder='Search' />
            </div>
            <div className={HeaderCSS["Cart"]}>
                <FaShoppingCart className={HeaderCSS['FaCart']}/>
            </div>
            <div className={HeaderCSS["Heart"]}>
                <FaHeart className={HeaderCSS['FaHearts']}/>
            </div>
        </div>  : "" }

        <div className={HeaderCSS["Burger-Menu"]}>
        {display? <div className={HeaderCSS["Burger-Container"]}>
                    <FaBars className={HeaderCSS["BurgerBar"]} onClick={onDisplay} />
        </div> :""}
        </div>
        </div>

       { display?  "" :<div className={HeaderCSS['Short']}>
            <div className={HeaderCSS["Close"]}>
            <FaWindowClose onClick={onDisplay} className={HeaderCSS['X']}/ > </div>
            <div className={HeaderCSS["Short-Search"]}>
                <input type="text"
                placeholder='Search' 
                id={HeaderCSS['ShortSearch']}/>
            </div>
            <div className={HeaderCSS["Content"]}><h1 className={`${HeaderCSS.Text} ${HeaderCSS. Home}`}>Home</h1></div>
            <div className={HeaderCSS["Content"]}><h1 className={`${HeaderCSS.Text} ${HeaderCSS.Shop}`}>Shop</h1></div>
            <div className={HeaderCSS["Content"]}><h1 className={`${HeaderCSS.Text} ${HeaderCSS. Archives}`}>Archives</h1></div>
            </div>}
        
    </nav>
  )
}

export default Headerr
