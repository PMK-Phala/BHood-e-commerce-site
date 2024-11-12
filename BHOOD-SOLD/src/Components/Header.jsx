import HeaderCSS from '/src/Styles/Header.module.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header className={HeaderCSS["Header"]}>
            <Link to={"/"}> <h1 className={HeaderCSS["Nav-Item"]}>Home</h1> </Link>
            <Link to={"/"}> <h1 className={HeaderCSS["Nav-Item"]}>Shop</h1> </Link>
            <Link to={"/"}> <h1 className={HeaderCSS["Nav-Item"]}>Archives</h1> </Link>
        </header>
    )
}
export default Header