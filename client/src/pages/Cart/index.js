import React, { useContext } from "react";
import DeveloperContext from "../../utils/DeveloperContext"
import ParticlesBg from 'particles-bg';
import Footer from "../../components/Footer/index"
import "./style.css"

function Cart() {
    const { cart } = useContext(DeveloperContext);

    return (
        <div>
            <ParticlesBg color="#08f09b" num={200} type="cobweb" bg={true} />
            <div className="containerCart">

                <div className="cardA">

                    <div className="table ">
                        <h2>Cart Items {cart.length}</h2><br />


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
                        </thead>

                    </div>

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Cart;

