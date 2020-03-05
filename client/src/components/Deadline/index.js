import React, { Component } from "react";
import API from "../../utils/API";

// import { json } from 'express';

class Deadline extends Component {
  constructor() {
    super();

    this.state = {
      dates: [],
      date: ""
      
    };
  }

  deletedates = id => {
    console.log(id);
    API.deletedate(id)
      .then(res => this.loaddate())
      .catch(err => console.log(err));
  };


  loaddates = () => {
    API.getdates()
      .then(res =>
        this.setState({
          dates: res.data,
          date: ""
        })
      )
      .catch(err => console.log(err));
  };

  
  handleFormSubmit = event => {
    event.preventDefault();
    API.savedates({
      date: this.state.date,
    })
      .then(res => this.loadsdates())
      .catch(err => console.log(err));
  };

  
  componentDidMount() {
    fetch("/api/dates")
      .then(res => res.json())
      .then(dates =>
        this.setState({ dates }, () =>
          console.log("Dates fetched:..", dates)
        )
      );
  }


  render() {
    return (
      <div className="container">
           {this.props.authorized ? (
            <div className="blend-form">
              <form id="add-blend" onSubmit={this.handleSubmit}>



                <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Date update</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                    name="date"
                    placeholder="Date"
                    required
                  />
                </div>

             </div>

                <button type="submit" onClick={this.handleFormSubmit}>
                  Submit
                </button>
              </form>
            </div>
          ) : (
            ""
          )}
        DEADLINE
      </div>
    );
  }
}

export default Deadline;
