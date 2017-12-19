import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
=======
>>>>>>> master
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router-DOM';
import axios from 'axios';
<<<<<<< HEAD
import Map from './Map';
import { changeListing, findApartments } from '../actions/index';
=======
>>>>>>> master

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
<<<<<<< HEAD
    width: 800,
=======
    width: 900,
>>>>>>> master
    height: 450,
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'http://i.dailymail.co.uk/i/pix/2013/07/08/article-2358368-1AB814C2000005DC-885_634x383.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://i.pinimg.com/originals/4d/f5/a4/4df5a45152ffe788358562a039f85a3c.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://i.pinimg.com/originals/2d/b5/ac/2db5ac31c4cea8af9f827e55d52e9164.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://www.amli.com/AMLIContent/Files/apartments/chicago/lofts/amenity-exterior/lofts-amenity-exterior-clubroom3.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://venturebeat.com/wp-content/uploads/2014/06/8266229576_08c99cffd2_b.jpg?fit=578%2C383&strip=all',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://www.rentcafe.com/blog/wp-content/uploads/2016/02/apartments-for-rent-in-san-francisco.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/3089-3/gaia-apartments-building.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://cdngeneral.rentcafe.com/dmslivecafe/3/295836/002.jpg?width=580&height=385&mode=pad&bgcolor=333333&scale=both',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

class BrowseApartment extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        isAdmin: false
      };
  }

  // componentWillMount() {
  //     axios.post('http://localhost:3000/apartmentsByLocation')
  //     .then(resp=>{
  //         this.setState(resp.data);
  //         console.log('this.state in browse apartment', this.state);
  //     })
  //     .catch(err=>console.log(err));
  // }

  render() {
    console.log(this.props.apartments);
    return(
      <div>
        <h1>Browse Apartment</h1><br/>

        <div>
          <div className="row" style = {{margin: "10px"}}>
            <div className = "container col-md-4 col-xs-12">
              <Map height='450px' width='450px' drawingAllowed={true}/>
            </div>
            <div className = "container col-md-8 col-xs-12">
              <div style={styles.root}>
                <GridList
                  cellHeight={180}
                  style={styles.gridList}
                >
                  {this.props.apartments ? this.props.apartments.map((apt) => {
                    console.log(this.props.listing ? this.props.listing.id : 'no listing in store');
                    return(
                      <Link to={`/apartmentprofile/${apt.id}`}>
                      <GridTile
                        style={(this.props.listing === apt.id) ? {background: 'rgba(0, 0, 0, 0.2)'} : {background: 'rgba(0, 0, 0, 0)'}}
                        key={apt.id}
                        onMouseEnter={()=>this.props.toChangeListing(apt.id)}
                        onMouseLeave={()=>this.props.toChangeListing(null)}
                        title={apt.title}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                      >
                        <img src={apt.picture} />
                      </GridTile></Link>
                    )
                  }) : <div>No listings</div>}
                </GridList>
              </div>
          </div>
    </div>
  </div>
</div>
    );
  }
}

<<<<<<< HEAD
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

BrowseApartment = connect(mapStateToProps, mapDispatchToProps)(BrowseApartment);

=======
>>>>>>> master
export default BrowseApartment;
