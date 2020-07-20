import React, { Component } from "react";

import "./components.scss";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: "",
      count: "",
      price: "",
      promotionalPrice: "",
    };
  }

  handleInputChange = (event) => {
    return this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form action="">
        <pre>
          { JSON.stringify(this.state) }
        </pre>
        <input name="product" type="text" value={ this.state.product } onChange={this.handleInputChange}/>
        <input name="count" type="text" value={ this.state.count } onChange={this.handleInputChange}/>
        <input name="price" type="text" value={ this.state.price } onChange={this.handleInputChange}/>
        <input name="promotionalPrice" type="text" value={ this.state.promotionalPrice } onChange={this.handleInputChange}/>
        <input className="button" type="submit" value="Aceptar" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default ProductForm;
