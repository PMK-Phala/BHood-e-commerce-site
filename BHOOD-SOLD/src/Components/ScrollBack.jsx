import ScrollBackCSS from '/src/Styles/ScrollBack.module.css'
import {FaChevronUp} from "react-icons/fa" ;
import {useState , useEffect} from 'react'

const ScrollBack=() => {

 const [Appear, setAppear]= useState(false)

    function handleTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
      };

useEffect(()=>{
    window.addEventListener('scroll' , ()=>{
        if(window.scrollY>22.66){
            setAppear(true)
        }
        else{
            setAppear(false)
        }
    },[]
    )
})

    return(
        <div className={ScrollBackCSS['Container']} >
           {Appear && <div className= {ScrollBackCSS['Content']} >
                <FaChevronUp className= {ScrollBackCSS['FontAwesomes']}  onClick={handleTop}/>
            </div>
            }
        </div>
    )
}
export default ScrollBack