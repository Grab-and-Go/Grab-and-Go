import React, {Component} from "react";
import API from "../utils/API";
import RestaurantCard from "../components/RestaurantCard";
import ParticlesBg from 'particles-bg';
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import SearchForm from "../components/SearchForm";
import Container from "../components/Container"


class Restaurant extends Component {

  state={
    search: "",
    restaurants:[],
    results:[],
    error: ""
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
handleMenu = (event,restid) => {
    event.preventDefault();
    console.log("restid"+restid);
    console.log(this.state.search);
    API.getRestaurants(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.data, error: "" });
        console.log("Menu"+res.data.data);
      })
      .catch(err => this.setState({ error: err.message }));
  };
  

  render(){

  return (
    <div>
    <ParticlesBg color="#08f09b" num={200} type="cobweb" bg={true} />
    <Container>
      
          <h1 className="text-center">Grab n Go</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            restaurants={this.state.restaurants}
          />
          <RestaurantCard results={this.state.results} handleMenu={this.handleMenu}/>
   
   </Container>
    
    <Footer/>
   
    </div>
    
  );
  }

}

export default Restaurant;
