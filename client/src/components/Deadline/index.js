import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css"


// import { json } from 'express';

class Deadline extends Component {
  constructor() {
    super();

    this.state = {
      deadlines: [],
      name: "",
      date: ""
      
    };
  }



  loaddeadlines = () => {
    API.getdeadlines()
      .then(res =>
        this.setState({
          deadlines: res.data,
          name: "",
          date: ""
        })
      )
      .catch(err => console.log(err));
  };


  deletedeadlines = id => {
    console.log(id);
    API.deletedeadlines(id)
      .then(res => this.loaddeadlines())
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
    API.savedeadlines({
      name: this.state.name,
      date: this.state.date
    })
      .then(res => this.loaddeadlines())
      .catch(err => console.log(err));
  };

  
  componentDidMount() {
    fetch("/api/deadlines")
      .then(res => res.json())
      .then(deadlines =>
        this.setState({ deadlines }, () =>
          console.log("Dates fetched:..", deadlines)
        )
      );
  }


  render() {
    return (
      <div >
           {this.props.authorized ? (
        
              <form id="add-deadline" onSubmit={this.handleSubmit}>



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
         
          ) : (
            ""
          )}
        DEADLINE


        <div className="holder">
          {this.state.deadlines.map(deadlines => (
            <div className="date" key={deadlines._id}>
              <h1>Order Deadline</h1>
              <h1>{deadlines.date}</h1>

         
              <div className="content">
              
                  
                 
                
                    {this.props.authorized ? (
                      <div>
                        {" "}
                        <button
                          type="button"
                          onClick={() => this.deletedeadlines(deadlines._id)}
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                 
                
              </div>
            </div>
          ))}
        </div>
        </div>
    );
  }
}

export default Deadline;
