import React from "react";

function NavTabs(props) {

  return (

    <ul className="nav nav-tabs ml-auto">

      <li >
        <a
          style={{ color: "green" }}
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >Home</a>
      </li>
      <li >
        <a
          style={{ color: "green" }}
          href="#cart"
          onClick={() => props.handlePageChange("Cart")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Cart
        </a>
      </li>

      <button className="btn btn-outline-success my-2 my-sm-0" onClick={props.handleLogout}  >Logout</button>

    </ul>

  );
}

export default NavTabs;