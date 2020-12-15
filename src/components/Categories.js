import React, { Component } from "react";
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
     
    };
  }
  componentDidMount() {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then(res => res.json())
      .then(json => {
        this.setState({ categories: json });
       
      });
    
  }
  render(){
    let { categories } = this.state;
    return (
    <ol> {categories.map((category, key) => {
      return (<li><a href="#">{category}</a></li>);

    })}
    </ol>);
  }
}
export default Categories