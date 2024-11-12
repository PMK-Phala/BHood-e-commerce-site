import Header from "../Components/Header"
import Topper from "../Components/Topper"
import Carousel from "../Components/Carousel"
import Footer from "./Footer"
import ProductSnippet from "../Components/ProductSnippet"
import ScrollBack from "../Components/ScrollBack"

const Home=( {pictures})=>{
    return(
        <>
        <ScrollBack/>
        <Header/>
        <Topper/>
        <Carousel Category1={"SweatShirt"} Category2={"T-Shirt"} Category3={"TrackSuit"} Category4={"Essentials"} Category5={"Bennies"} pictures={pictures}/>
        <ProductSnippet/>
        <Carousel/>
        <Footer/>
        </>
    )
}
export default Home