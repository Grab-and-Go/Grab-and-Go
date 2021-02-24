import React, { useContext } from "react";
import DeveloperContext from "../../utils/DeveloperContext"
import ParticlesBg from 'particles-bg';
import Footer from "../../components/Footer/index";
import "./style.css";
import API from "../../utils/API";



function Cart() {
    const { cart } = useContext(DeveloperContext);

    var total = 0;
    for(var i = 0;i <cart.length;i++)
    {
        total += parseFloat(cart[i].cost);
    }


    const createOrder = (event) => {
        event.preventDefault();
        console.log("cart",cart);
        var obj = {};
        obj["orderArray"] = cart;
        obj["totalCost"] = total;
        obj["user"] = "jessica";
        obj["distance"] = 1.3;
        obj["calories"] = 50;
        obj["restaurantName"] = "";
        console.log("obj", obj);
        API.storeSummary(obj);

    }



    return (
        <div>
            <ParticlesBg color="#08f09b" num={200} type="cobweb" bg={true} />
            <div className="containerCart">

                <div className="cardA">

                    <div className="table ">
                        {/* <h2>Cart Items {cart.length}</h2><br /> */}
                        <h2>Summary</h2><br />


                        <thead>
                            <tr>
                                <th><h3>Item</h3></th>
                                <th><h3>Price</h3></th>
                            </tr>
                            {cart.map((cart) => (
                                <tr>
                                    <td>


                                        {cart.name}
                                    </td>
                                    <td>
                                        ${cart.cost}
                                    </td>
                                </tr>
                            ))}

                            <tr>
                                <th><h3>Total</h3></th>
                                <th><h3>${total}</h3></th>
                          
                            </tr>
                        </thead>
                        <br />   
                        <button className="cart btn btn-success btn-lg" type="submit" onClick={createOrder}> <i class="fas fa-cheese"> Submit Order</i></button>

                    </div>

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Cart;

