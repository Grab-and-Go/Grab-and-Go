
import React, {Component} from "react";
import API from "../utils/API";
import RestaurantCard from "../components/RestaurantCard";
import ParticlesBg from 'particles-bg';
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import SearchForm from "../components/SearchForm";
import Container from "../components/Container";
import MenuCard from "../components/MenuCard";
import Map from "../components/Map/Map";
import DeveloperContext from "../utils/DeveloperContext"




class Restaurant extends Component {

  state={
    search: "",
    restaurants:[],
    results:[],
    error: "",
    menuResults:[{sectionname:"",menu_items:[]}],
    orderCount:"",
    cart:[]
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRestaurants(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.data, error: "" });
        console.log(res.data.data);
      })
      .catch(err => this.setState({ error: err.message }));
  };

  showMenu = menu =>{
console.log(menu);
this.setState({menuResults: menu});
  }

  orderCount = (itemCount)=>{
      this.setState({orderCount:itemCount});
  }

  setCart = (cart) =>{
      this.setState({cart:cart})
  }


  render(){
    const { cart } = this.state
    const { setCart } = this
  return (
      <DeveloperContext.Provider value={{cart,setCart}}>
    <div>
    <ParticlesBg color="#08f09b" num={200} type="cobweb" bg={true} />
    <Container>
        {this.state.cart.length}
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
        
          {/* <Map results={this.state.results}/> */}
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            restaurants={this.state.restaurants}
          />
          
          <Map results={this.state.results}/>
          <RestaurantCard results={this.state.results} handleMenu={this.showMenu}/>
          
        <MenuCard menuRes={this.state.menuResults} orderCount={this.orderCount}></MenuCard>
        
   </Container>
    
    <Footer/>
   
    </div>
    </DeveloperContext.Provider>
  );
  }

}

export default Restaurant;
