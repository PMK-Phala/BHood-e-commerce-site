import Header from "../Components/Header"
import Topper from "../Components/Topper"
import Carousel from "../Components/Carousel"
import Footer from "./Footer"
import ProductSnippet from "../Components/ProductSnippet"
import ScrollBack from "../Components/ScrollBack"

const Home=( {pictures})=>{
    return(
        <>
        <Topper/>
        <Carousel Category1={"Jumpers"} Category2={"T-Shirt"} Category3={"TrackSuit"} Category4={"Essentials"} Category5={"Bennies"} pictures={pictures}/>
        </>
    )
}
export default Home