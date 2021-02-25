import React, { useContext, useEffect, useState } from "react";
import DeveloperContext from "../../utils/DeveloperContext"
import ParticlesBg from 'particles-bg';
import Footer from "../../components/Footer/index";
import "./style.css";
import API from "../../utils/API";
import fire from "../../fire"



function Cart() {
    const { cart } = useContext(DeveloperContext);
    const [currentLocation, setCurrentLocation] = useState({lat:0, lng:0})

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCurrentLocation({ lat:position.coords.latitude, lng:position.coords.longitude });
          });
    }, []);

    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += parseFloat(cart[i].cost);
    }


    const createOrder = (event) => {
        event.preventDefault();
        console.log("cart", cart);
        var obj = {};
        obj["orderArray"] = cart;
        obj["totalCost"] = total.toFixed(2);
        obj["user"] = fire.auth().currentUser.email;
        obj["distance"] = 1.3;
        obj["calories"] = 50;
        obj["restaurantName"] = cart[0].currentRestaurant;
        console.log("obj", obj);
        API.storeSummary(obj);

    }

    // var origin1 = new google.maps.LatLng(55.930385, -3.118425);
    // var origin2 = 'Greenwich, England';
    // var destinationA = 'Stockholm, Sweden';
    // var destinationB = new google.maps.LatLng(50.087692, 14.421150);

    // var service = new google.maps.DistanceMatrixService();
    // service.getDistanceMatrix(
    // {
    //     origins: [origin1, origin2],
    //     destinations: [destinationA, destinationB],
    //     travelMode: 'DRIVING',
    //     transitOptions: TransitOptions,
    //     drivingOptions: DrivingOptions,
    //     unitSystem: UnitSystem,
    //     avoidHighways: Boolean,
    //     avoidTolls: Boolean,
    // }, callback);

    // function callback(response, status) {
    // // See Parsing the Results for
    // // the basics of a callback function.
    // }
    
    

    return (
        <div>
            <ParticlesBg color="#08f09b" num={200} type="cobweb" bg={true} />
            <div className="containerCart">

                <div className="cardA">

                    <div className="table ">
                        <h2>Summary</h2><br />
                        <h4>{cart[0].currentRestaurant}</h4><br />


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
                                <th><h3>${total.toFixed(2)}</h3></th>

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

