/* <Individual display1Function={display1Function} display2Function={display2Function} Display1={Display1} Display2={Display2} handleSizeChart={handleSizeChart} SizeChart={SizeChart} ProductDisplay={ProductDisplay} setProductDisplay={setProductDisplay} handleDisplay={handleDisplay}/>
    </>
*/

<Header/>
<Topper/>
<Carousel/>
<ProductSnippet/>
<Carousel/>
<Footer/>

<React.StrictMode>
<RouterProvider router={router}/>
</React.StrictMode>

<ul>
            {items.map(() => (
                <li style={{width:"10vw" , height:"10vh", border:"1px solid red"}}>
                    {items.title}
                </li>
            ))}
        </ul>

<h1 onClick={()=>console.log(items)}>HEY</h1>

<Show items={items}/>
setItems(listItems);




const router = createBrowserRouter([
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


  <Carousel Category1={"SweatShirt"} Category2={"T-Shirt"} Category3={"TrackSuit"} Category4={"Essentials"} Category5={"Bennies"} pictures={pictures}/>
  <ProductSnippet/>
  <Carousel/>
  <Footer/>



  