import '/src/Styles/Show.css'
import {FaHeart} from "react-icons/fa"
import { useState } from 'react'

function useProduct(items , category){
    const Products= items.filter(((item) => item.category.includes(`${category}`)) )
    const [hoveredItemId, setHoveredItemId] = useState(null)
    const handleCheck=(item)=>{
        if (item.checked){item.checked=false  }
        else{item.checked=true }
    }
    return(
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
                        <h1 onClick={()=>{console.log(localStorage.getItem('Products'))}}>{Product.title }</h1>
                        <p>{Product.price}</p> 
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default useProduct