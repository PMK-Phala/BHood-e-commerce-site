import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaTimes } from "react-icons/fa";
import PhotoCSS from "/src/Styles/Photo.module.css"

function Photo({handleDisplay}){

    const images = [
        {
          original: "/bhood images/1.jpg",
          thumbnail: "/bhood images/1.jpg",
          originalHeight:"480vh",
          thumbnailHeight: "90vh"
        },
        {
          original: "/bhood images/2.jpg",
          thumbnail: "/bhood images/2.jpg",
          originalHeight:"480vh",
          thumbnailHeight: "90vh",
        },
        {
          original:"/bhood images/3.jpg",
          thumbnail:"/bhood images/3.jpg" ,
          thumbnailHeight: "90vh",
          originalHeight:"480vh",
        },
      ];


    return(
        <div className={PhotoCSS["Photo"]} >
          <FaTimes className={PhotoCSS["FaTimes"]} onClick={handleDisplay}/>
          <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
        </div>
    )
}export default Photo