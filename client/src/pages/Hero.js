import React, { Component } from 'react';
import Restaurant from "./Restaurant";
import DeveloperContext from "../utils/DeveloperContext";
import Cart from "./Cart";
import Navbar from "../components/Navbar";
import fire from '../fire';
import Logo from "./LogoMakr-1nU0Zg.png"


class Hero1 extends Component {

    state =
        {
            currentPage: "Home",
            cart: []
        }

    handleLogout = () => {
        fire.auth().signOut();
    };
    setCart = (cart) => {
        this.setState({ cart: cart })
    };
  


    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <Restaurant />;
        }
        else if (this.state.currentPage === "Cart") {
            return <Cart />;
            //   <DeveloperContext.Provider value={{cart,setCart}} ><Cart /></DeveloperContext.Provider>);
        }
    };
    handlePageChange = page => {
        this.setState({ currentPage: page });
    };


    render() {
        const { cart } = this.state
        const { setCart } = this
        // const { restaurant_name } = this.state
        // const { setRestaurantName } = this
        return (
            <DeveloperContext.Provider value={{ cart, setCart }}>
                <section className="hero">
                    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#d9ead3"}} >
                        <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent"><Navbar handleLogout={this.handleLogout}
                            currentPage={this.state.currentPage}
                            handlePageChange={this.handlePageChange}></Navbar>
                        </div>
                    </nav>
                    {/* <Restaurant/> */}
                    {this.renderPage()}
                </section>
            </DeveloperContext.Provider>
        )
    }
}


export default Hero1