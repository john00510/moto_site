import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

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
      </div>
    );
  }
}

export default App;
