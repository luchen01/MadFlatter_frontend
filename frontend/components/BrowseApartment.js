import React from 'react';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Link } from 'react-router-DOM';
import axios from 'axios';
import Map from './Map';
import { changeListing, findApartments } from '../actions/index';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 450,
    display: 'flex',
    flexWrap: 'wrap',
    flexFlow: 'row wrap',
    overflowY: 'auto',
  },
};

class BrowseApartment extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        isAdmin: false
      };
  }

  componentWillMount() {
      axios.post('http://localhost:3000/apartmentsByLocation')
      .then(resp=>{
          this.setState(resp.data);
          console.log('this.state in browse apartment', this.state);
      })
      .catch(err=>console.log(err));
  }

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
                    console.log(this.props.listing ? this.props.listing : 'no listing in store');
                    return(
                      <Link to={`/apartment/${apt.id}`}>
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

export default BrowseApartment;
