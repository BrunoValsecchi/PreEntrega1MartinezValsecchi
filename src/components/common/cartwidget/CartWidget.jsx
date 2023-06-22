import { RiShoppingCartLine } from "react-icons/ri";
import "./CartWidget.css"
function CartWidget() {
  return (
    <div>
    {/* icono de carrito */}
    <div className="numHardcDiv">
        <p className="numHardP">5</p>
    </div>
    
    <RiShoppingCartLine color="white" size="40px" />
  
  
  </div>
  )
}

export default CartWidget