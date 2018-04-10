import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CarsPage from "./pages/CarsPage";
import SellMyCar from "./pages/SellMyCar";
import CarFinancing from "./pages/CarFinancing";

class App extends React.Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
      const response = await fetch('/');
      const body = await response.json();

      if (response.status !== 200) throw Error(body.message);

      return body;
  };

  render() {
    return (
      <div>
        <Route path="/" exact component={ HomePage } />
        <Route path="/login" exact component={ LoginPage } />
        <Route path="/cars*" exact component={ CarsPage } />
        <Route path="/sell-my-car" exact component={ SellMyCar } />
        <Route path="/car-financing" exact component={ CarFinancing } />
      </div>
    );
  }
}

export default App;
