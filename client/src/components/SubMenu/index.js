import React from "react";
import './style.css'

function SubMenu(props){
        var rows=[];
        for(var i = 0;i<props.senddata.length;i++){
            var obj = {};
            var rand = Math.random()*(15-8) + 8;
            var power = Math.pow(10, 2);
            var itemCost = Math.floor(rand*power) / power;
            obj["name"]= props.senddata[i].name;
            obj["price"] = itemCost;
            rows.push(obj);
        } 
        var cart =[];
       
         const cartHandler=(event)=>{
            event.preventDefault();
             var obj={};
            obj["name"]=event.target.name;
            obj["cost"]=event.target.value;
            cart.push(obj); 
            console.log(cart);
        }

        return (
        <div class="list-group">
            {rows.map(item=>
            <div>
            <div class="list-group-item">{item.name} --- {item.price}$<button name={item.name} value={item.price} onClick={cartHandler} className="btn btn-success"><i class="fas fa-shopping-cart"></i></button></div>
            
            </div>)}
        </div>
        ); 
}

export default SubMenu;