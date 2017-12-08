import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Listing from './Listing';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listing: null,
      markers:[]
    }
  }

  renderListing(listing){
    console.log('rerendering listing');
    this.setState({
      listing: listing
    })
  }

  loadApartmentsFromCraigsList(){
    console.log('making axios call');
    axios.get('http://localhost:3000/craigslist')
    .then((response)=>{
        console.log(response.data.message);

    })
  }

  findApartmentsByLocation(){
    const self = this;
    var rectangle = this.state.rectangle;
    this.state.map.fitBounds(this.state.rectangle)
    axios.post('http://localhost:3000/apartmentsByLocation', {
        minLat: rectangle.f.b,
        maxLat: rectangle.f.f,
        minLng: rectangle.b.b,
        maxLng: rectangle.b.f
      })
      .then((response) => {
        self.state.markers.map((marker) => {
          marker.setMap(null);
        })
        self.setState({
          markers: []
        })
        response.data.apartments.map((listing) => {
          if(!listing.lat) console.log(listing.title);
          else {
            let marker = new google.maps.Marker({
              position: {lat: listing.lat, lng: listing.lng},
              map: self.state.map,
              title: listing.title,
            })
            marker.addListener('click', () => {
              self.renderListing(listing);
            });
            self.setState({
              markers: [...this.state.markers, marker]
            })
          }
        })
      })
  }

  componentDidMount(){
    var self = this;
    var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: new google.maps.LatLng(37.783335, -122.419042),
            mapTypeId: 'roadmap',
            gestureHandling: 'cooperative',
            disableDoubleClickZoom: true
          });
    // var flightPlanCoordinates = [
    //   {lat: 37.778887, lng: -122.477905},
    //   {lat: 37.788269, lng: -122.405722},
    //   {lat: 37.761408, lng: -122.403319},
    //   {lat: 37.754762, lng: -122.475073},
    //   {lat: 37.778887, lng: -122.477905}
    // ];
    // var flightPath = new google.maps.Polyline({
    //   path: flightPlanCoordinates,
    //   geodesic: true,
    //   strokeColor: '#FF0000',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 2
    // });

    var drawingManager = new google.maps.drawing.DrawingManager({
      // drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['circle', 'rectangle']
      },
      markerOptions: {
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',

      },
      circleOptions: {
        fillColor: '#fd0202',
        fillOpacity: .2,
        strokeWeight: 2,
        clickable: true,
        editable: true,
        zIndex: 1
      },
      rectangleOptions: {
        fillColor: '#fd0202',
        fillOpacity: .2,
        strokeWeight: 2,
        draggable: true,
        editable: true,
        clickable: true
      }
    });
    drawingManager.setMap(map);
    // flightPath.setMap(map);
    google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
      if (event.type === 'circle') {
        console.log(event.overlay.getRadius(), event.overlay.getCenter());
        var circle = event.overlay;
        google.maps.event.addListener(circle, 'bounds_changed', function(event){
          console.log(circle.getCenter().lat(), circle.getCenter().lng(), circle.getRadius());
          //UPDATE DATABASE
        })
        google.maps.event.addListener(circle, 'rightclick', function(event){
          console.log('here');
          circle.setMap(null)
          //REMOVE FROM DATABASE
        })
      } else if(event.type === 'rectangle'){
        var rectangle = event.overlay;
        self.setState({
          rectangle: rectangle.getBounds()
        })
        google.maps.event.addListener(rectangle, 'bounds_changed', function(event){
          console.log(rectangle.getBounds().b, rectangle.getBounds().f);
          self.setState({
            rectangle: rectangle.getBounds()
          })
            //UPDATE DATABASE
        })
        google.maps.event.addListener(rectangle, 'rightclick', function(event){
          rectangle.setMap(null);
          //REMOVE FROM DATABASE
        })
      }
    });
    this.setState({
      map: map
    })

  }

  render(){
    return (
      <div>
        <h1>{name}</h1>
        <button className="btn btn-default" onClick={()=>(this.loadApartmentsFromCraigsList())}>Click to load apartments</button>
        <button className="btn btn-default" onClick={()=>(this.findApartmentsByLocation())}>Click to find apartments in this region</button>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div id='map' style={{height: '500px', width: '500px'}}></div>
          {this.state.listing ? <Listing listing={this.state.listing}/> : <p>Click on a listing to view</p>}
        </div>
      </div>
    );
  }
};

Map.propTypes = {
    name: PropTypes.string,
};


export default Map;
