import React, { Component } from 'react';
import axios from 'axios'
export default class addAttraction extends Component {
  constructor (props){
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangeImageURL = this.onChangeImageURL.bind(this);
    this.onChangeAddress= this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeState= this.onChangeState.bind(this);
    this.onChangeZipcode= this.onChangeZipcode.bind(this);
    this.onChangeIndoors = this.onChangeIndoors.bind(this);
    this.onChangeKid = this.onChangeKid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        name: "",
        description: "",
        website: "",
        imageURL:"",
        location: {
          address: "",
          city: "",
          state:"",
          zipcode:""
        },
        indoors: 0,
        kidFriendly: 0,
        likes: 1
      }
    }
  onChangeName(e){
    this.setState({
      name: e.target.value
    })
  }
  onChangeDescription(e){
    this.setState({
      description: e.target.value
    })
  }
  onChangeWebsite(e){
    this.setState({
      website: e.target.value
    })
  }
  onChangeImageURL(e){
    this.setState({
      imageURL: e.target.value
    })
  }
  onChangeAddress(e){
      this.setState({
          location:{
                address: e.target.value
          }
      })
  }
  onChangeCity(e){
      this.setState({
          location:{
                ...this.state.location,
                city: e.target.value
          }
      })
  }
  onChangeState(e){
      this.setState({
          location:{
              ...this.state.location,
              state: e.target.value
          }
      })
  }
  onChangeZipcode(e){
      this.setState({
          location:{
              ...this.state.location,
              zipcode: e.target.value
          }
      })
  }
  onChangeIndoors(e){
    this.setState({
      indoors: e.target.value
    })
    }
  onChangeKid(e){
    this.setState({
      kidFriendly: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const attraction ={
      name: this.state.name,
      description: this.state.description,
      website: this.state.website,
      imageURL: this.state.imageURL,
      location: this.state.location,
          address: this.state.location.address,
          city: this.state.location.city,
          state: this.state.location.state,
          zipcode: this.state.location.zipcode
      ,
      indoors: this.state.indoors,
      kidFriendly: this.state.kidFriendly,
      likes: this.state.likes
    }
    console.log(attraction)
    axios.post('http://localhost:5000/attractions/add', attraction)
    .then((res)=>{
      console.log(res.data)
    })
    window.alert('Thank you for your contribution')
    window.location="/attractions"
    console.log(attraction)
  }
  render() {
    return (
      <div>
        <h3>Add Your Favorite Attraction</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              >
              </input>
          </div>
          <div className="form-group">
              <label>Description</label>
              <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              >
              </input>
          </div>
          <div className="form-group">
            <label>Website</label>
              <input
              type="text"
              className="form-control"
              value={this.state.website}
              onChange={this.onChangeWebsite}
              >
              </input>
          </div>
          <div className="form-group">
            <label>Image(url)</label>
              <input
              type="text"
              className="form-control"
              value={this.state.imageURL}
              onChange={this.onChangeImageURL}
              >
              </input>
          </div>
          <div className="form-group">
            <label>Street Address</label>
              <input
              type="text"
              className="form-control"
              value={this.state.location.address}
              onChange={this.onChangeAddress}
              >
              </input>
          </div>
          <div className="form-group">
            <label>City</label>
              <input
              type="text"
              className="form-control"
              value={this.state.location.city}
              onChange={this.onChangeCity}
              >
              </input>
          </div>
          <div className="form-group">
            <label>State</label>
              <input
              type="text"
              className="form-control"
              value={this.state.location.state}
              onChange={this.onChangeState}
              >
              </input>
          </div>
          <div className="form-group">
            <label>Zipcode</label>
              <input
              type="text"
              className="form-control"
              value={this.state.zipcode}
              onChange={this.onChangeZipcode}
              >
              </input>
          </div>
          <div className="form-group">
            <label>Indoors: </label>
            <select
            // ref="userInput"
            required
            className="form-control"
            // value=''
            onChange={this.onChangeIndoors}
            >
              <option value=''>-Select(required)-</option>
              <option value='1'>True</option>
              <option value='0'>False</option>
            </select>
          </div>
          <div className="form-group">
            <label>Kid Friendly: </label>
            <select
            // ref="userInput"
            required
            className="form-control"
            // value=''
            onChange={this.onChangeKid}
            >
              <option value=''>-Select(required)-</option>
              <option value='1'>True</option>
              <option value='0'>False</option>
            </select>
          </div>
          <div className="form-group">
              <input
              type="submit"
              value="Create Attraction Log"
              className="btn btn-primary"
              />
          </div>
        </form>
      </div>
    )
  }
}