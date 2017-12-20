import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Listing extends Component{
  constructor(props){
    super(props);
    this.state = {
      listing: this.props.listing
    };
  }

  componentDidMount(){
    console.log('in listing');
    axios.get(`http://localhost:3000/apartment/${this.state.listing.id}`)
    .then((response) => {
      console.log(response);
      this.setState({
        listing: response.data.apartment
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  componentWillReceiveProps(props){
    console.log('in listing');
    axios.get(`http://localhost:3000/apartment/${this.props.listing.id}`)
    .then((response) => {
      console.log(response);
      this.setState({
        listing: response.data.apartment
      })
      console.log(this.state.listing.pictures);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render(){
    return(
      <div>
        <p>{this.state.listing.title}</p>
        {this.state.listing.pictures ? this.state.listing.pictures.map((pic) => {
          return (<div>
            <img src={pic}/>
          </div>)
        }) : <p> There are no pictures for this listing </p>}
        {/* <div>{listing.postBody}</div> */}
      </div>
    )
  }

}

Listing.propTypes = {
    listing: PropTypes.object,
};

export default Listing;
