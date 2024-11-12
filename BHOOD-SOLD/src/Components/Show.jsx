import '/src/Styles/Show.css'
import { useState } from 'react'
import {FaHeart} from "react-icons/fa"

function Show({items}){

    const [hoveredItemId, setHoveredItemId] = useState(null)

    const handleCheck=(item)=>{
        if (item.checked){item.checked=false }
        else{item.checked=true }
    }
    return(
        <div className='Container'>
        <ul>
            {items.map((item) => (
                <li  className="Product" 
                key={item.id}
                >
                    <div className='Img' 
                     onMouseEnter={()=>{ setHoveredItemId(item.id)  }}
                     onMouseLeave={()=>{ setHoveredItemId(null) }}
                     >
                    <FaHeart className="FaHeart" onClick={()=>{handleCheck(item), console.log(item.category)}}
                        style={{color: item.checked? "red":"white"}}/>
                    <img src={hoveredItemId == item.id ? item.image2 : item.image1} alt="" /> 
                    
                    </div>
                    <div className="Details">
                        <h1>{item.title }</h1>
                        <p>{item.price}</p> 
                    </div>
                </li>
            ))}
        </ul>
        </div>
    )
}
export default Show