import '/src/Styles/Show.css'
import { useState } from 'react'
import {FaHeart} from "react-icons/fa"

function SweatShirt({items}){
    
    const Products= items.filter(((item) => item.category.includes("SweatShirt")) )
      
    const [hoveredItemId, setHoveredItemId] = useState(null)
    const handleCheck=(item)=>{
        if (item.checked){item.checked=false  }
        else{item.checked=true }
    }
    return(
        <div className='Container'>
        <ul>
            {Products.map((Product) => (
                <li  className="Product" 
                key={Product.id}
                >
                    <div className='Img' 
                     onMouseEnter={()=>{ setHoveredItemId(Product.id)  }}
                     onMouseLeave={()=>{ setHoveredItemId(null) }}
                     >
                    <FaHeart className="FaHeart" onClick={()=>{handleCheck(Product)}}
                        style={{color: Product.checked? "red":"white"}}/>
                    <img src={hoveredItemId == Product.id ? Product.image2 : Product.image1} alt="" /> 
                    
                    </div>
                    <div className="Details">
                        <h1 onClick={()=>{console.log(Products)}}>{Product.title }</h1>
                        <p>{Product.price}</p> 
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}
export default SweatShirt