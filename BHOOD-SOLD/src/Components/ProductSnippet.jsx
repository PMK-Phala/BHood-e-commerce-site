import ProductSnippetCSS from"/src/Styles/ProductSnippet.module.css"
import { useState } from "react"


function ProductSnippet(){

    const [mouseState1 , setMouseState1]=useState(false)
    const [mouseState2 , setMouseState2]=useState(false)
    const [mouseState3 , setMouseState3]=useState(false)
    const [mouseState4 , setMouseState4]=useState(false)

    return(
        <div className={ProductSnippetCSS["Product-Snippet"]}>
            <div className={ProductSnippetCSS["Display-Items"]} >
                <div className={ProductSnippetCSS["Product"]} 
                onMouseEnter={()=>{setMouseState1(true) }}
                onMouseLeave={()=>{setMouseState1(false) }}>
                   { !mouseState1 && <><div className={ProductSnippetCSS["Image"]}  >
                        <img src="\bhood images\Category-Images\BHOOD-C1.jpg" alt="" />
                    </div>
                    <div className= {ProductSnippetCSS["Image-details"]}   >
                        <h1>Skipa a Top</h1>
                        <h2>R 460</h2>
                    </div> </>}
                    {mouseState1 && (<><div className={`${ProductSnippetCSS.Image} ${ProductSnippetCSS.HoverImage}`}>
                        <img src="\bhood images\Category-Images\BHOOD-C2.jpg" alt="" />
                        <div className={ProductSnippetCSS["Buy-Item"]}><h2>Shop Item</h2></div>
                    </div>
                    <div className={ProductSnippetCSS["Image-details"]}>
                        <h1>Skipa a Top</h1>
                        <h2>R 460</h2>
                    </div> </>) }
                </div>

                <div className={ProductSnippetCSS["Product"]} 
                onMouseEnter={()=>{setMouseState2(true) }}
                onMouseLeave={()=>{setMouseState2(false) }}>
                
                   { !mouseState2 && <><div className={ProductSnippetCSS["Image"]}>
                        <img src="\bhood images\Category-Images\BHOOD-C1.jpg" alt="" />
                    </div>
                    <div className={ProductSnippetCSS["Image-details"]}>
                        <h1>Skipa a Top</h1>
                        <h2>R 460</h2>
                    </div> </>}
                    {mouseState2 && (<><div className={`${ProductSnippetCSS.Image} ${ProductSnippetCSS.HoverImage}`}>
                        <img src="\bhood images\Category-Images\BHOOD-C2.jpg" alt="" />
                        <div className={ProductSnippetCSS["Buy-Item"]} ><h2>Shop Item</h2></div>
                    </div>
                    <div className={ProductSnippetCSS["Image-details"]}>
                        <h1>Skipa a Top</h1>
                        <h2>R 460</h2>
                    </div> </>) }
                </div>
        



                <div className={ProductSnippetCSS["Product"]} 
                onMouseEnter={()=>{setMouseState3(true) }}
                onMouseLeave={()=>{setMouseState3(false) }}>
                   { !mouseState3 && <><div className={ProductSnippetCSS["Image"]}>
                        <img src="\bhood images\Category-Images\BHOOD-C1.jpg" alt="" />
                    </div>
                    <div className={ProductSnippetCSS["Image-details"]}>
                        <h1>Skipa a Top</h1>
                        <h2>R 460</h2>
                    </div> </>}
                    {mouseState3 && (<><div className={`${ProductSnippetCSS.Image} ${ProductSnippetCSS.HoverImage}`}>
                        <img src="\bhood images\Category-Images\BHOOD-C2.jpg" alt="" />
                        <div className={ProductSnippetCSS["Buy-Item"]}><h2>Shop Item</h2></div>
                    </div>
                    <div className={ProductSnippetCSS["Image-details"]}>
                        <h1>Skipa a Top</h1>
                        <h2>R 460</h2>
                    </div> </>) }
                </div>

                <div className={ProductSnippetCSS["Product"]}  
                onMouseEnter={()=>{setMouseState4(true)}}
                onMouseLeave={()=>{setMouseState4(false)}}>
                   { !mouseState4 && <><div className={ProductSnippetCSS["Image"]}>
                        <img src="\bhood images\Category-Images\BHOOD-C1.jpg" alt="" />
                    </div>
                    <div className={ProductSnippetCSS["Image-details"]}>
                        <h1>Skipa a Top</h1>
                        <h2>R 460</h2>
                    </div> </>}
                    {mouseState4 && (<><div className={`${ProductSnippetCSS.Image} ${ProductSnippetCSS.HoverImage}`}>
                        <img src="\bhood images\Category-Images\BHOOD-C2.jpg" alt="" />
                        <div className={ProductSnippetCSS["Buy-Item"]}><h2>Shop Item</h2></div>
                    </div>
                    <div className={ProductSnippetCSS["Image-details"]}>
                        <h1>Skipa a Top</h1>
                        <h2>R 460</h2>
                    </div> </>) }
                </div>

            </div>
            <div className={ProductSnippetCSS["Main-Image"]}>
            <img src="\public\450463817_355876407545540_6110828434405199229_n.jpg" alt="" />
            </div>
        </div>
    )
}
export default ProductSnippet