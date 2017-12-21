import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
axios.defaults.withCredentials = true;
import Listing from './Listing';
import { changeListing, findApartments } from '../actions/index';

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oneListing: this.props.listing ? this.props.listing : null,
      markers: this.props.markers ? this.props.markers : [],
      regions: this.props.regions ? this.props.regions : [],
      searchFilters: { },
      displayButton: false,
      drawingAllowed: this.props.drawingAllowed ? true : false
    }
    // this.infoWindow = new google.maps.InfoWindow({
    //       content: `<img src='http://res.freestockphotos.biz/pictures/8/8309-illustration-of-a-black-top-hat-pv.png' style={height: 20px}></img>`
    //     });
  }

  newMarker(listing, n){
    const self = this;
    const size = n ? n : 25;
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
    marker.id = listing.id;
    // if(self.props.oneListing)
    marker.addListener('click', () => {
      self.renderListing(listing);
      // marker.addListener('click', function() {
      //   self.infoWindow.open(map, marker);
      // });
    });
    self.setState({
      markers: [...this.state.markers, marker]
    })
  }

  changeSearch(e, property) {
    this.setState({
      searchFilters: Object.assign({}, this.state.searchFilters, {[property]: e.target.value})
    })
  }

  renderListing(listing){
    console.log('rerendering listing');
    this.setState({
      listing: listing
    })
  }

  // loadApartmentsFromCraigsList(){
  //   console.log('making axios call');
  //   axios.get('http://localhost:3000/craigslist')
  //   .then((response)=>{
  //       console.log('line 40:', response.data.message);
  //   })
  // }

  loadApartments(apts){
    const self = this;
    this.props.toFindApartments(apts);
    self.state.markers.map((marker) => {
      marker.setMap(null);
    })
    self.setState({
      markers: []
    })
    apts.map((listing) => {
      self.newMarker(listing);
    })
  }

  findApartmentsByLocation() {
    const self = this;
    // var bounds = {
    //   north: this.state.map.getBounds().f.b,
    //   south: this.state.map.getBounds().f.f,
    //   east: this.state.map.getBounds().b.b,
    //   west: this.state.map.getBounds().b.f
    // }
    var regions = self.state.regions.map((rectangle) => {
      return {
        north: rectangle.north,
        south: rectangle.south,
        west: rectangle.west,
        east: rectangle.east
      }
    });
    // this.state.map.fitBounds(bounds);

    var defaultBounds = {
      north: 180,
      south: 0,
      west: -180,
      east: 0,
    }
    axios.post(`${process.env.URL}/apartmentsByLocation`, {
        regions: regions.length ? regions : [defaultBounds],
        searchFilters: self.state.searchFilters
      })
      .then((response) => {
        console.log(response);
        self.loadApartments(response.data.apartments);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentWillReceiveProps(props){
      const self = this;
      let listingId = props.listing;
      console.log('in componentWillReceiveProps. listingId =', listingId);
      var image = new google.maps.MarkerImage(
        'http://images.clipartpanda.com/google-location-icon-Location_marker_pin_map_gps.png',
        new google.maps.Size(200, 200),
        new google.maps.Point(0, 0),
        new google.maps.Point(17, 34),
        new google.maps.Size(25, 25));
      var defaultImage = new google.maps.MarkerImage(
        'http://simpleicon.com/wp-content/uploads/map-marker-5.png',
        new google.maps.Size(71, 71),
        new google.maps.Point(0, 0),
        new google.maps.Point(17, 34),
        new google.maps.Size(25, 25));

      this.setState({
        markers: self.state.markers.map((marker) => {
          if(marker.id === listingId){
            marker.setMap(null);
            marker.icon = image;
            marker.setZIndex(10000);
            marker.setMap(self.state.map);
          } else if(marker.getZIndex() === 10000){
            marker.setMap(null);
            marker.icon = defaultImage;
            marker.setZIndex(1);
            marker.setMap(self.state.map);
          }
          return marker;
        })
      })
      if(props.oneListing) this.newMarker(props.oneListing, 45);
  }

  componentDidMount(){
    var self = this;
    var map = new google.maps.Map(document.getElementById('googleMap'), {
            zoom: 12,
            center: new google.maps.LatLng(37.783335, -122.419042),
            mapTypeId: 'roadmap',
            gestureHandling: 'cooperative',
            disableDoubleClickZoom: true
          });
    // map.addListener('bounds_changed', function() {
    //   // 3 seconds after the center of the map has changed, pan back to the
    //   // marker.
    //   self.setState({
    //     displayButton: true
    //   })
    // });
    if(self.state.drawingAllowed) {

      var drawingManager = new google.maps.drawing.DrawingManager({
        // drawingMode: google.maps.drawing.OverlayType.MARKER,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ['rectangle']
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
      google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
        if(event.type === 'rectangle'){
          var time = (new Date()).getTime();
          var rectangle = event.overlay;
          rectangle.time = time;
          console.log('line 153:', self.state.displayButton);
          self.setState({
            // rectangle
            regions: [...self.state.regions, {
              north: rectangle.bounds.f.f,
              south: rectangle.bounds.f.b,
              west: rectangle.bounds.b.b,
              east: rectangle.bounds.b.f,
              time: time
            }],
            displayButton: true
          })
          google.maps.event.addListener(rectangle, 'bounds_changed', function(event){
            // console.log(rectangle.getBounds().b, rectangle.getBounds().f);
            // console.log(rectangle);
            self.setState({
              regions: self.state.regions.map((region) => {
                console.log('line 170:', rectangle.time, region.time);
                  return (rectangle.time === region.time) ? Object.assign({}, {
                      north: rectangle.bounds.f.f,
                      south: rectangle.bounds.f.b,
                      west: rectangle.bounds.b.b,
                      east: rectangle.bounds.b.f,
                      time: region.time
                    }) : region;
              })
              // rectangle: Object.assign({}, self.state.rectangle, {boundaries: rectangle.getBounds()})
            })
            console.log('line 181:', self.state.regions);
          })
          google.maps.event.addListener(rectangle, 'rightclick', function(event){
            rectangle.setMap(null);
            var newRegions = self.state.regions.filter((region) => {
              return region.time !== rectangle.time
            })
            self.setState({
              regions: newRegions,
              displayButton: newRegions.length === 0 ? false : true
            })
          })
        }
      });
    }
    this.setState({
      map: map
    })
    if(self.props.oneListing){
      self.newMarker(this.props.oneListing);
    } else {
      self.findApartmentsByLocation();
    }
  }

  render(){
    var height = this.props.height ? this.props.height : '500px';
    var width =  this.props.width ? this.props.width : '500px';
    return (
      <div style={{width: width, height: height}}>
        {/* <h1>Current listing: {this.state.listing ? this.state.listing.title : 'NA'}</h1>
        <button className="btn btn-default" onClick={()=>(this.loadApartmentsFromCraigsList())}>Click to load apartments</button>
        <button className="btn btn-default" onClick={()=>(this.findApartmentsByLocation())}>Click to find apartments in this region</button>
        <input placeholder="minimum area" onChange={(e)=>(this.changeSearch(e, 'areaMin'))} value={this.state.searchFilters.areaMin}/>
        <input placeholder="maximum price" onChange={(e)=>(this.changeSearch(e, 'priceMax'))} value={this.state.searchFilters.priceMax}/>
        <input placeholder="minimum beds" onChange={(e)=>(this.changeSearch(e, 'bedsMin'))} value={this.state.searchFilters.bedsMin}/>
        <input placeholder="minimum baths" onChange={(e)=>(this.changeSearch(e, 'bathsMin'))} value={this.state.searchFilters.bathsMin}/> */}
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <div style={{position:'relative'}}>
            <div id='googleMap' style={{height: height, width: width }}></div>
            {this.state.displayButton ? <FindApartmentButton onClick={()=>(this.findApartmentsByLocation())}/> : null}
          </div>
          {/* {this.state.listing ? <Listing listing={this.state.listing}/> : <p>Click on a listing to view</p>} */}
        </div>
      </div>
    );
  }
};

class FindApartmentButton extends Component {
    constructor(props){
      super(props);
    }

    componentDidMount(){
      console.log('onclick:', this.props.onClick);
    }

    render(){
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: '10px',
          left: '150px'
        }}>
          <div className="mapButton" style={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '5px',
            padding: '10px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: '10px',
            zIndex: '1'
          }}
          onClick={this.props.onClick}> Find Apartments Here</div>
        </div>
      )
    }
}

Map.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    apartments: state.apartments,
    listing: state.listing
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toChangeListing: (listing) => dispatch(changeListing(listing)),
    toFindApartments: (apartments) => dispatch(findApartments(apartments))
  }
}

Map = connect(mapStateToProps, mapDispatchToProps)(Map);

export default Map;
