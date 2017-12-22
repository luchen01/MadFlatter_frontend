import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
axios.defaults.withCredentials = true;
import Listing from './Listing';
import { changeListing, findApartments, saveRegions } from '../actions/index';

class MapOneListing extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    console.log('in constructor');
    // this.infoWindow = new google.maps.InfoWindow({
    //       content: `<img src='http://res.freestockphotos.biz/pictures/8/8309-illustration-of-a-black-top-hat-pv.png' style={height: 20px}></img>`
    //     });

  }

  newMarker(listing, n){
    const self = this;
    const size = n ? n : 25;
    if(this.state.map) this.state.map.setCenter({lat: listing.lat, lng: listing.lng});
    var defaultImage = new google.maps.MarkerImage(
      'http://simpleicon.com/wp-content/uploads/map-marker-5.png',
      new google.maps.Size(71, 71),
      new google.maps.Point(0, 0),
      new google.maps.Point(size/2, size),
      new google.maps.Size(size, size));
    let marker = new google.maps.Marker({
      position: {lat: listing.lat, lng: listing.lng},
      map: self.state.map,
      title: listing.title,
      icon: defaultImage
    })
  }

  componentDidMount() {
    this.setState({
      map: new google.maps.Map(document.getElementById('googleMapOneListing'), {
              zoom: 12,
              center: new google.maps.LatLng(37.754438, -122.445411),
              mapTypeId: 'roadmap',
              gestureHandling: 'cooperative',
              disableDoubleClickZoom: true
            })
    })
    if(this.props.listing){
      this.state.map.setCenter(listing.lat, listing.lng);
    }
  }

  // componentWillReceiveProps(props){
  //   if(this.state.map){
  //     this.state.map.setCenter(props.listing.getPosition());
  //   }
  // }

  render(){
    var height = this.props.height ? this.props.height : '500px';
    var width =  this.props.width ? this.props.width : '500px';
    if(this.props.listing) {
      this.newMarker(this.props.listing, 40);
    }
    return (
      <div style={{width: width, height: height}}>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div style={{position:'relative'}}>
            <div id='googleMapOneListing' style={{height: height, width: width }}></div>
          </div>
        </div>
      </div>
    );
  }
};

MapOneListing.propTypes = {
    listing: PropTypes.object,
};


export default MapOneListing;
