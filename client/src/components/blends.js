import React, { Component } from "react";
import "./styles/blends.css";
import API from "../utils/API";
// import { json } from 'express';

class Blendscard extends Component {
  constructor() {
    super();

    this.state = {
      blends: [],
      name: "",
      ingredients: "",
      price: "",
      image: ""
    };
  }

  loadblends = () => {
    API.getblends()
      .then(res =>
        this.setState({
          blends: res.data,
          name: "",
          ingredients: "",
          price: "",
          image: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteblend = id => {
    console.log(id);
    API.deleteblend(id)
      .then(res => this.loadblends())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveblends({
      name: this.state.name,
      ingredients: this.state.ingredients,
      price: this.state.price,
      image: this.state.image
    })
      .then(res => this.loadblends())
      .catch(err => console.log(err));
  };

  componentDidMount() {
    fetch("/api/blends")
      .then(res => res.json())
      .then(blends =>
        this.setState({ blends }, () =>
          console.log("Blends fetched:..", blends)
        )
      );
  }

  render() {
    return (
      <div>
        <div className="container">
          {this.props.authorized ? (
            <div className="blend-form">
              <form id="add-blend" onSubmit={this.handleSubmit}>



                <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Blend Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Name of Blend"
                    required
                  />
                </div>

                <div className="form-group col-md-6">
                <label>Price</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.price}
                    onChange={this.handleInputChange}
                    name="price"
                    placeholder="Price"
                    required
                  />
                </div>
                  
                </div>

                <div className="form-group">

                <label>Blend Ingredients</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.ingredients}
                    onChange={this.handleInputChange}
                    placeholder="Blend Ingredients"
                    name="ingredients"
                    required
                  />
                </div>





                 

                <div className="form-group">
                  <label>Image</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.image}
                    onChange={this.handleInputChange}
                    name="image"
                    placeholder="200 x 200 Image"
                    required
                  />
                </div>

                <button type="submit" onClick={this.handleFormSubmit}>
                  Submit
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="holder">
          {this.state.blends.map(blends => (
            <div className="card" key={blends._id}>
              <h1>{blends.name}</h1>

              <div className="img-container">
                <img alt={blends.name} src={blends.image} />
              </div>
              <div className="content">
                <ul>
                  <li>
                    <strong>Ingredients:</strong> {blends.ingredients}
                  </li>
                  <li>
                    <strong>Price per lb: $</strong> {blends.price}
                    {this.props.authorized ? (
                      <div>
                        {" "}
                        <button
                          type="button"
                          onClick={() => this.deleteblend(blends._id)}
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blendscard;
