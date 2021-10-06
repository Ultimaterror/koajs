import axios from "axios";
import React, { Component } from "react";


const URL = "https://gql.alcyone.life/categories";


export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      }
    }
  
    componentDidMount() {
      var _this = this;
      axios.get(URL)
      .then(function(res){
        console.log(res.data);
        _this.setState({
          items: res.data
        });
      })
      .catch(function(e) {
        console.log("ERROR ", e);
      })
    }
  
    render() {
      const renderItems = this.state.items.map(function(item, i) {
        return <li key={i}>{item.name}</li>
      });
  
      return (
        <ul className="App">
          {renderItems}
        </ul>
      );
    }
}