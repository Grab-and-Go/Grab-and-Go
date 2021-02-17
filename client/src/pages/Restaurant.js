
import React, {Component} from "react";
import API from "../utils/API";
import RestaurantCard from "../components/RestaurantCard";
import ParticlesBg from 'particles-bg';
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import SearchForm from "../components/SearchForm";
import Container from "../components/Container";
import MenuCard from "../components/MenuCard"


class App extends Component {

  state={
    search: "",
    restaurants:[],
    results:[],
    error: "",
    menuResults:[{sectionname:"",menu_items:[]}]
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


  render(){

  return (
    <div>
    <ParticlesBg color="#08f09b" num={200} type="cobweb" bg={true} />
    <Container>
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
          <RestaurantCard results={this.state.results} handleMenu={this.showMenu}/>
          
        <MenuCard menuRes={this.state.menuResults}></MenuCard>
        
   </Container>
    
    <Footer/>
   
    </div>
    
  );
  }

}

export default App;
