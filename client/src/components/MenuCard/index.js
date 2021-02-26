
import React from "react";
import './style.css';
import SubMenu from "../SubMenu";


function MenuCard(props) {

    const { center, currentRestaurant } = props

    return (
        <div class="list-group">
            {props.menuRes.map(item =>
                <div key={item.id}>
                    <a href="#" className="list-group-item list-group-item-success">{item.section_name}</a>
                    <SubMenu center={center} currentRestaurant={currentRestaurant} senddata={item.menu_items} orderCount={props.orderCount}></SubMenu>
                </div>

            )}
        </div>
    );

}

export default MenuCard;