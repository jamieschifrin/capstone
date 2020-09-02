import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Single Exercise Component
const Attraction = (props) => {
  return (
    <tr>
      <td>{props.attraction.name}</td>
      <td>{props.attraction.description}</td>
      <td><a href= {props.attraction.website} >Website</a></td>
      <td>
        <Link to={"/attractions/" + props.attraction._id}>learn more</Link>|{" "}
        {/* <a
        href="#"
        onClick={() =>{props.deleteAttraction(props.attraction._id)}}
        >
          delete
        </a> */}
      </td>
    </tr>
  )
}
// ExerciseList Component
export default class ExercisesList extends Component {
  constructor(props){
    super(props)
    this.state={
      attractions: []
    };
  }
  componentDidMount(){
    axios.get('http://localhost:5000/attractions/')
      .then(response => {
        this.setState({
          attractions: response.data
        })
        console.log('this is the class project')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  exerciseList(){
    return this.state.attractions.map((currentAttraction) =>{
      return <Attraction
        attraction = {currentAttraction}
        key={currentAttraction._id}
      />
    })
  }
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}