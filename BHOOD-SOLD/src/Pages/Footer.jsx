import FooterCSS from '/src/Styles/Footer.module.css';
import {FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa" ;
import { Link } from 'react-router-dom';
const Footer=()=>{

const handleClick=(e)=>{
    e.preventDefault()
}
function handleTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
  };

    return(
        <footer className={FooterCSS["Footer-Container"]}>

            <article className= {`${FooterCSS.GetInTouch} ${FooterCSS.Box}`}>
                <h1>Get In Touch</h1>
                <section className= {`${FooterCSS.Location} ${FooterCSS.Section}`} > <a href="https://maps.app.goo.gl/M7f2UhocUdYbe9eHA"> <span><FaMapMarker className={FooterCSS['FontAwesome']}/> <p>BHOOD</p> </span>
                <p>Centurion , South Africa</p> </a> </section>
                <section className= {`${FooterCSS.Email} ${FooterCSS.Section}`} > <FaEnvelope className={FooterCSS['FontAwesome']}/> <a href="https://support.google.com/mail/answer/8494?hl=en&co=GENIE.Platform%3DDesktop"> <p className={FooterCSS['Route-Text']} >hello@Bhood.online </p></a></section>
                <section className={`${FooterCSS.Phone} ${FooterCSS.Section}`} > <FaPhone className={FooterCSS['FontAwesome']}/> <p>+27 HIRE ME </p></section>
            </article>

            <article className={`${FooterCSS.Pages} ${FooterCSS.Box}`}>
                <h1>Pages</h1>
                <section className={FooterCSS["Section"]}><p className={FooterCSS['Route-Text']} onClick={handleTop} >Home</p></section>
                <section className={FooterCSS["Section"]}><a href="" ><p className={FooterCSS['Route-Text']} onClick={handleClick} >About</p></a></section>
                <section className={FooterCSS["Section"]}><a href="" ><p className={FooterCSS['Route-Text']} onClick={handleClick} >Archives</p></a></section>
            </article>
            <article className={`${FooterCSS.QuickLinks} ${FooterCSS.Box}`}>
                <h1>Quick Links</h1>
                <section className={FooterCSS["Section"]}> 
                <Link to={"/FAQ"}>
                <p className={FooterCSS['Route-Text']} >FAQ</p>
                </Link>
                </section>
            </article>
        </footer>
    )
}
export default Footer