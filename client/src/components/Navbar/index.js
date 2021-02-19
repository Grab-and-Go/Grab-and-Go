import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#cart"
          onClick={() => props.handlePageChange("Cart")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Summary
        </a>
      </li>
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={()=>props.handleLogout} style={{float: "right"}} >Logout</button>
      
    </ul>
  );
}

export default NavTabs;
