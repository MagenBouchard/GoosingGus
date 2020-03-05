import axios from "axios";

export default {
  register: function (user) {
    return axios.post("/api/register", user);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  isAuthorized: function () {
    return axios.get("/api/authorized");
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  availableUN: function (username) {
    return axios.get("/api/user/?username=" + username);
  },  // Gets all blends
  getblends: function() {
    return axios.get("/api/blends");
  },
  // Gets the blend with the given id
  getblend: function(id) {
    return axios.get("/api/blends/" + id);
  },
  // Deletes the blend with the given id
  deleteblend: function(id) {
    return axios.delete("/api/blends/" + id);
  },
  // Saves a blend to the database
  saveblends: function(blendData) {
    return axios.post("/api/blends", blendData);
  },
  //Save a date to the database
    savedates: function(datesData){
      return axios.post("/api/dates", datesData);
    },
    //Deltes the date with a given id
    deletedates: function(id){
      return axios.delete("api/dates/" + id);
    }
};
