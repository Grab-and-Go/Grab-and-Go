import React, { useContext } from "react";
import "./style.css";
import DeveloperContext from "../../utils/DeveloperContext";

function SubMenu(props) {
  const { cart, setCart } = useContext(DeveloperContext);
  var rows = [];
  for (var i = 0; i < props.senddata.length; i++) {
    var obj = {};
    var rand = Math.random() * (15 - 8) + 8;
    var power = Math.pow(10, 2);
    var itemCost = Math.floor(rand * power) / power;
    obj["name"] = props.senddata[i].name;
    obj["price"] = itemCost;
    rows.push(obj);
  }

    // fixing event.target
    const cartHandler = (event) => {
        event.preventDefault();
        var obj = {};
        obj["name"] = event.target.name;
        obj["cost"] = event.target.value;
        obj["currentRestaurant"] = props.currentRestaurant;
        obj["coords"] = props.center;
        cart.push(obj);
        setCart(cart);
    }

  return (
    <div className="list-group">
      {rows.map((item) => (
        <div>
          <div className="list-group-item">
            {item.name}  ---  ${item.price}
            <button style={{float: "right"}}
              name={item.name}
              value={item.price}
              onClick={cartHandler}
              className="btn btn-success"
            >
              {" "}
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubMenu;
