import Header from "./Components/Header"
import Topper from "./Components/Topper"
import Carousel from "./Components/Carousel"
import Footer from "./Pages/Footer"
import ProductSnippet from "./Components/ProductSnippet"
import Show from "./Components/Show"
import { useState, useEffect } from "react"
import SweatShirt from "./Pages/SweatShirt"
import Sweat from "./Pages/Sweat"
import {createBrowserRouter , RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import FAQ from './Pages/FAQ'
import RootLayout from "./Layouts/RootLayout"

function App() {

  const [items, setItems] = useState([]);
  const [pictures, setPictures]=useState([])
  const Items_URL = "http://localhost:3000/Items";
  const Pictures_URL = "http://localhost:3000/Pictures";

useEffect(() => {

  const fetchItems = async () => {
    try {
      const response = await fetch(Items_URL);
      const responsed = await fetch(Pictures_URL);
      const listItems = await response.json();
      const Images = await responsed.json();
      setItems(listItems);
      setPictures(Images)
      localStorage.setItem('Products', JSON.stringify(listItems));
    } catch (err) {
    } 
  }
  fetchItems();

}, [])

const route = createBrowserRouter([
  {
    path : "/" ,
    element : <Home pictures={pictures}/>
  },

  {
    path : "/FAQ" ,
    element : <FAQ/>
  },

  {
    path : "/Products" ,
    element : <Sweat items={items} />
  }
])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>} >
    <Route index element={ <Home pictures={pictures}/>} />
    <Route path="FAQ" element={<FAQ/>}/>
    <Route path="Products" element={ <Sweat items={items} />}/>

  </Route>
))


    return(<>
    <RouterProvider router={router}/>
    </>
 )
}

export default App
