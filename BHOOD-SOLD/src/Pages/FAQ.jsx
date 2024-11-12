import FAQCSS from "/src/Styles/FAQ.module.css"
import {useState , useEffect} from 'react'
import { Link } from "react-router-dom"

const FAQ=()=>{
    const [rotate1, setRotate1] = useState(-1)
    const [spin1 , setSpin1] = useState(-1)
    const [pivot1 , setPivot1] = useState(-1)

    const [bounce1 , setBounce1] = useState(0)
    const [rebound1, setRebound1] = useState(0)
    const [spring1, setSpring1] = useState(0)


    const [rotate2, setRotate2] = useState(-1)
    const [spin2 , setSpin2] = useState(-1)
    const [pivot2 , setPivot2] = useState(-1)

    const [bounce2 , setBounce2] = useState(0)
    const [rebound2, setRebound2] = useState(0)
    const [spring2, setSpring2] = useState(0)
    const [value, setValue]=useState(false)
    useEffect(() => {
        
        const hash = window.location.hash;
        window.scroll(0,0)
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [value]);




    const handleToggle=()=>{
        setValue(!value)
    }

    return(
        <div className={FAQCSS["Container"]}>
        <div className={FAQCSS["Topics"]}>
            <div className={FAQCSS["Text"]}>
            <section className={FAQCSS["Heading"]}>
            <h1>Topics</h1>
            </section>
            <section className={FAQCSS["Body"]}>
                <Link to={"/FAQ#General"}>
            <p className={FAQCSS["paragraph"]} onClick={handleToggle}>General Questtions</p>
            </Link>
            <Link to={"/FAQ#Shipping"} >
            <p className={FAQCSS["paragraph"]} onClick={handleToggle}>Shiping & Return</p>
            </Link>
            </section>
            </div>
        </div>
        <div className={FAQCSS["Questions-Answers"]}>

            <article className={`${FAQCSS.General} ${FAQCSS.Questions}`} id="General">
                <section className={`${FAQCSS.Title} ${FAQCSS.Section}`}>
                    <h1>General Questions</h1>
                </section>
                <section className={`${FAQ.CSSQuestion} ${FAQCSS.Section}`}>
                    <div className={FAQCSS["Area"]}>
                    <p>When Will You Restock</p>
                    <div className={FAQCSS["Plus"]}
                        bounce1={bounce1}
                        onAnimationEnd={()=>{setBounce1(0)}}
                        onClick={()=>{
                        rotate1== -1 ? setRotate1(0):rotate1==1 ? setRotate1(0): rotate1==0 ? setRotate1(1):"" ;
                        setBounce1(1) } }>
                        <div className={FAQCSS["Horizontal"]}
                        rotate1={rotate1} ></div>
                        <div className={FAQCSS["Vertical"]}></div>
                    </div>
                    </div>
                   { !rotate1 && <div className={FAQCSS["Answer"]} rotate1={rotate1}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam velit nihil aperiam iste? Repudiandae ad odio quos, vel, beatae similique laboriosam expedita sequi modi ea et maxime velit reprehenderit.
                        Nemo in facere dolore, numquam hic quos ea sapiente maiores! Ipsa tempore sit, unde ex inventore commodi distinctio error velit doloremque! Sed repellat nobis similique commodi cum quidem impedit architecto.
                        Quisquam corrupti minima, similique dolorum quia perspic</p>
                    </div> }
                    </section>

                <section className={`${FAQCSS.Question} ${FAQCSS.Section}`}>
                    <div className={FAQCSS["Area"]}>
                    <p>How to Apply For Ambassardor Program</p>
                    <div className={FAQCSS["Plus"]}
                        rebound1={rebound1}
                        onAnimationEnd={()=>{setRebound1(0) }}
                        onClick={()=>{
                        spin1== -1 ? setSpin1(0):spin1==1 ? setSpin1(0): spin1==0 ? setSpin1(1):"" ;
                        setRebound1(1) } }>
                        <div className= {FAQCSS["Horizontal"]}
                        spin1={spin1} ></div>
                        <div className={FAQCSS["Vertical"]}></div>
                    </div>
                    </div>
                    { !spin1 && <div className={FAQCSS["Answer"]} spin1={spin1}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam velit nihil aperiam iste? Repudiandae ad odio quos, vel, beatae similique laboriosam expedita sequi modi ea et maxime velit reprehenderit.
                        Nemo in facere dolore, numquam hic quos ea sapiente maiores! Ipsa tempore sit, unde ex inventore commodi distinctio error velit doloremque! Sed repellat nobis similique commodi cum quidem impedit architecto.
                        Quisquam corrupti minima, similique dolorum quia perspic</p>
                    </div> }
                    </section>

                    <section className={`${FAQCSS.Question} ${FAQCSS.Section}`}>
                        <div className={FAQCSS["Area"]}>
                    <p>Discount Codes & Promotions</p>
                    <div className= {FAQCSS["Plus"]}
                        spring1={spring1}
                        onAnimationEnd={()=>{setSpring1(0) }}
                        onClick={()=>{
                        pivot1== -1 ? setPivot1(0):pivot1==1 ? setPivot1(0): pivot1==0 ? setPivot1(1):"" ;
                        setSpring1(1) } }>
                        <div className= {FAQCSS["Horizontal"]}
                        pivot1={pivot1} ></div>
                        <div className= {FAQCSS["Vertical"]}></div>
                        </div>
                    </div>
                    { !pivot1 && <div className={FAQCSS["Answer"]} pivot1={pivot1}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam velit nihil aperiam iste? Repudiandae ad odio quos, vel, beatae similique laboriosam expedita sequi modi ea et maxime velit reprehenderit.
                        Nemo in facere dolore, numquam hic quos ea sapiente maiores! Ipsa tempore sit, unde ex inventore commodi distinctio error velit doloremque! Sed repellat nobis similique commodi cum quidem impedit architecto.
                        Quisquam corrupti minima, similique dolorum quia perspic</p>
                    </div> }
                </section>
            </article>



            <article className={`${FAQCSS.Shipping} ${FAQCSS.Questions}`} id="Shipping">
            <section className={`${FAQCSS.Title} ${FAQCSS.Section}`}>
                    <h1>Shipping & Return</h1>
                </section>
                <section className={`${FAQ.CSSQuestion} ${FAQCSS.Section}`}>
                    <div className={FAQCSS["Area"]}>
                    <p>When Will You Restock</p>
                    <div className={FAQCSS["Plus"]}
                        bounce2={bounce2}
                        onAnimationEnd={()=>{setBounce2(0)   }}
                        onClick={()=>{
                        rotate2== -1 ? setRotate2(0):rotate2==1 ? setRotate2(0): rotate2==0 ? setRotate2(1):"" ;
                        setBounce2(1) } }>
                        <div className={FAQCSS["Horizontal"]}
                        rotate2={rotate2} ></div>
                        <div className={FAQCSS["Vertical"]}></div>
                    </div>
                    </div>
                   { !rotate2 && <div className={FAQCSS["Answer"]} rotate2={rotate2}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam velit nihil aperiam iste? Repudiandae ad odio quos, vel, beatae similique laboriosam expedita sequi modi ea et maxime velit reprehenderit.
                        Nemo in facere dolore, numquam hic quos ea sapiente maiores! Ipsa tempore sit, unde ex inventore commodi distinctio error velit doloremque! Sed repellat nobis similique commodi cum quidem impedit architecto.
                        Quisquam corrupti minima, similique dolorum quia perspic</p>
                    </div> }
                    </section>

                <section className={`${FAQCSS.Question} ${FAQCSS.Section}`}>
                    <div className={FAQCSS["Area"]}>
                    <p>How to Apply For Ambassardor Program</p>
                    <div className={FAQCSS["Plus"]}
                        rebound2={rebound2}
                        onAnimationEnd={()=>{setRebound2(0) }}
                        onClick={()=>{
                        spin2== -1 ? setSpin2(0):spin2==1 ? setSpin2(0): spin2==0 ? setSpin2(1):"" ;
                        setRebound2(1) } }>
                        <div className= {FAQCSS["Horizontal"]}
                        spin2={spin2} ></div>
                        <div className={FAQCSS["Vertical"]}></div>
                    </div>
                    </div>
                    { !spin2 && <div className={FAQCSS["Answer"]} spin2={spin2}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam velit nihil aperiam iste? Repudiandae ad odio quos, vel, beatae similique laboriosam expedita sequi modi ea et maxime velit reprehenderit.
                        Nemo in facere dolore, numquam hic quos ea sapiente maiores! Ipsa tempore sit, unde ex inventore commodi distinctio error velit doloremque! Sed repellat nobis similique commodi cum quidem impedit architecto.
                        Quisquam corrupti minima, similique dolorum quia perspic</p>
                    </div> }
                    </section>

                    <section className={`${FAQCSS.Question} ${FAQCSS.Section}`}>
                        <div className={FAQCSS["Area"]}>
                    <p>Discount Codes & Promotions</p>
                    <div className= {FAQCSS["Plus"]}
                        spring2={spring2}
                        onAnimationEnd={()=>{setSpring2(0) }}
                        onClick={()=>{
                        pivot2== -1 ? setPivot2(0):pivot2==1 ? setPivot2(0): pivot2==0 ? setPivot2(1):"" ;
                        setSpring2(1) } }>
                        <div className= {FAQCSS["Horizontal"]}
                        pivot2={pivot2} ></div>
                        <div className= {FAQCSS["Vertical"]}></div>
                        </div>
                    </div>
                    { !pivot2 && <div className={FAQCSS["Answer"]} pivot2={pivot2}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam velit nihil aperiam iste? Repudiandae ad odio quos, vel, beatae similique laboriosam expedita sequi modi ea et maxime velit reprehenderit.
                        Nemo in facere dolore, numquam hic quos ea sapiente maiores! Ipsa tempore sit, unde ex inventore commodi distinctio error velit doloremque! Sed repellat nobis similique commodi cum quidem impedit architecto.
                        Quisquam corrupti minima, similique dolorum quia perspic</p>
                    </div> }
                </section>
            </article>


        </div>
        </div>
    )
}
export default FAQ 