import React from "react";
import './style.css'

function SubMenu(props){
        var rows=[];
        for(var i = 0;i<props.senddata.length;i++){
        rows.push(props.senddata[i].name);
        } 
        var cart =[];
         const cartHandler=(event)=>{
            event.preventDefault();
            var obj={};
            obj["name"]=event.target.name;
            obj["price"]="10";
            cart.push(obj);
        }
        return (
        <div class="list-group">
            {rows.map(item=>
            <div>
            <a href="#" class="list-group-item">{item}</a>
            {/* <button name={item} onClick={cartHandler}>Add to Cart</button> */}
            </div>)}
        </div>
        ); 
      
}

export default SubMenu;