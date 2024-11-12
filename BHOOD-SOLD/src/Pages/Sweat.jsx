import '/src/Styles/Show.css'
import useProduct from '../useProduct'

function Sweat({items}){
    
    return(<>
        <div className='Container'>
            { useProduct(items, "")};
        </div>
        </>
    )
}
export default Sweat