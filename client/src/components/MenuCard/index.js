import React from "react";
import './style.css';
import SubMenu from "../SubMenu"

function MenuCard(props){

    return (
        <div class="list-group">
        {props.menuRes.map(item => 
            <div key={item.id}>
                <a href="#" className="list-group-item list-group-item-success">{item.section_name}</a> 
              <SubMenu senddata={item.menu_items}></SubMenu>
            </div>
        
        )}
         </div>
    );
  
}

export default MenuCard;