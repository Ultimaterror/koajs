import axios from "axios";
import React, { Component } from "react";


// const URL = "https://gql.alcyone.life/categories";


export default class Collection extends Component {

    // $url;

    constructor(props) {
      super(props);
      let collection = props.match.params.collection;
      this.state = {
        url: `https://gql.alcyone.life/${collection}`,
        items: []
      }
    }
  
    componentDidMount() {
      var _this = this;
      axios.get(_this.state.url)
      .then(function(res){
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
