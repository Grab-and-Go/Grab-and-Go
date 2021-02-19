import React,{useContext} from "react";
import DeveloperContext from "../../utils/DeveloperContext"

function Cart(){
    const {cart, setCart}= useContext(DeveloperContext);
return(
    <div class="list-group">
        There are {cart.length} items in the cart.
    {cart.map(item=>
    <div>
    <div class="list-group-item">{item.name} --- {item.cost}$</div>
    
    </div>)}
</div>)

}

export default Cart;

