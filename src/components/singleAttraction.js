import React, { Component } from 'react';
import axios from "axios";
export default class EditAttraction extends Component {
  constructor(props){
    super(props)
    this.onClickLike = this.onClickLike.bind(this);
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
      indoors: false,
      kidFriendly: false,
      likes: 0
    }
  }
  componentDidMount() {
    axios.get("http://localhost:5000/attractions/" + this.props.match.params.id)
    .then((response) => {
      this.setState({
        name: response.data.name,
        description: response.data.description,
        website: response.data.website,
        imageURL:response.data.imageURL,
        location: {
          address: response.data.location.address,
          city: response.data.location.city,
          state:response.data.location.state,
          zipcode: response.data.location.zipcode
        },
        indoors: response.data.indoors.toString(),
        kidFriendly: response.data.kidFriendly.toString(),
        likes: response.data.likes
      })
    })
    .catch((error)=>{
      console.log(error)
    })
    console.log(this.state.name)
  }
  onClickLike(e){
    let currentLikesString = this.state.likes
    let currentLikes = parseInt(currentLikesString)
    let newLikes = currentLikes + parseInt(e.target.value)
    let newLikesString = newLikes.toString()
    this.setState({
      likes: newLikesString
    })
    const attraction = {
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
    axios.put('http://localhost:5000/attractions/' + this.props.match.params.id, attraction)
    .then((res)=>{
      console.log(res.data)
    }).catch((err)=>{console.log(err)})
    // window.location="/"
}
  render() {
    return (
      <div>
          <img src={this.state.imageURL} alt=""/>
          <br/>
          {this.state.name}
          <br/>
          {this.state.description}
          <br/>
          <a href={this.state.website}>Website</a>
          <br/>
          {this.state.location.address}
          <br/>
          {this.state.location.city}
          <br/>
          {this.state.location.state}
          <br/>
          {this.state.location.zipcode}
          <br/>
          <p>Indoors?</p>
          {this.state.indoors}
          <p>Family Friendly?</p>
          <br/>
          {this.state.kidFriendly}
          <br/>
          {this.state.likes}
          <br/>
          <button id="likeButton" onClick={this.onClickLike} value="1">Like</button>
      </div>
    )
  }
}





