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
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

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
        disableYearSelection: false,
        bedsMax: null,
        bedsMin: null,
        bathsMax: null,
        bathsMin: null,
        dateAvailableEnd: null,
        dateAvailableStart: null,
        priceMax: null,
        priceMin: null
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
        <div style={{display: 'flex', overflowWrap: 'normal'}}>
          <h1>Browse Apartment</h1>
          <div>
          <FontIcon className="material-icons"> hotel </FontIcon>
          <div>
            <SelectField
               floatingLabelText="Min Bedrooms"
               value={this.state.bedsMin}
               onChange={(event, index, value)=>this.setState({bedsMin: value})}
             >
               <MenuItem value={"1"} primaryText="1" />
               <MenuItem value={"2"} primaryText="2" />
               <MenuItem value={"3"} primaryText="3" />
               <MenuItem value={"4"} primaryText="4" />
               <MenuItem value={"5"} primaryText="5" />
               <MenuItem value={"6"} primaryText="6" />
               <MenuItem value={"7"} primaryText="7" />
               <MenuItem value={"8"} primaryText="8" />
             </SelectField>
             <SelectField
                floatingLabelText="Max Bedrooms"
                value={this.state.bedsMax}
                onChange={(event, index, value)=>this.setState({bedsMax: value})}
                >
                <MenuItem value={"1"} primaryText="1" />
                <MenuItem value={"2"} primaryText="2" />
                <MenuItem value={"3"} primaryText="3" />
                <MenuItem value={"4"} primaryText="4" />
                <MenuItem value={"5"} primaryText="5" />
                <MenuItem value={"6"} primaryText="6" />
                <MenuItem value={"7"} primaryText="7" />
                <MenuItem value={"8"} primaryText="8" />
              </SelectField>
          </div>
          </div>
          <div>
          <FontIcon className="material-icons"> wc </FontIcon>
          <div>
            <SelectField
               floatingLabelText="Min Bathrooms"
               value={this.state.bathsMin}
               onChange={(event, index, value)=>this.setState({bathsMin: value})}
             >
               <MenuItem value={"1"} primaryText="1" />
               <MenuItem value={"2"} primaryText="2" />
               <MenuItem value={"3"} primaryText="3" />
               <MenuItem value={"4"} primaryText="4" />
               <MenuItem value={"5"} primaryText="5" />
               <MenuItem value={"6"} primaryText="6" />
               <MenuItem value={"7"} primaryText="7" />
               <MenuItem value={"8"} primaryText="8" />
             </SelectField>
             <SelectField
                floatingLabelText="Max Bathrooms"
                value={this.state.bathsMax}
                onChange={(event, index, value)=>this.setState({bathsMax: value})}
              >
                <MenuItem value={"1"} primaryText="1" />
                <MenuItem value={"2"} primaryText="2" />
                <MenuItem value={"3"} primaryText="3" />
                <MenuItem value={"4"} primaryText="4" />
                <MenuItem value={"5"} primaryText="5" />
                <MenuItem value={"6"} primaryText="6" />
                <MenuItem value={"7"} primaryText="7" />
                <MenuItem value={"8"} primaryText="8" />
              </SelectField>
          </div>
          </div>
            <div>
              <FontIcon className="material-icons"> money </FontIcon>
              <div>
                <SelectField
                   floatingLabelText="Min Price"
                   value={this.state.priceMin}
                   onChange={(event, index, value)=>this.setState({priceMin: value})}
                 >
                   <MenuItem value={"500"} primaryText="500" />
                   <MenuItem value={"1000"} primaryText="1000" />
                   <MenuItem value={"15000"} primaryText="1500" />
                   <MenuItem value={"2000"} primaryText="2000" />
                   <MenuItem value={"2500"} primaryText="2500" />
                   <MenuItem value={"3000"} primaryText="3000" />
                 </SelectField>
                 <SelectField
                    floatingLabelText="Max Price"
                    value={this.state.priceMax}
                    onChange={(event, index, value)=>this.setState({priceMax: value})}
                  >
                    <MenuItem value={"2000"} primaryText="2000" />
                    <MenuItem value={"2500"} primaryText="2500" />
                    <MenuItem value={"3000"} primaryText="3000" />
                    <MenuItem value={"3500"} primaryText="3500" />
                    <MenuItem value={"4000"} primaryText="4000" />
                    <MenuItem value={"5000"} primaryText="5000" />
                    <MenuItem value={"7500"} primaryText="7500" />
                    <MenuItem value={"10000"} primaryText="10000" />
                  </SelectField>
              </div>
            </div>
          <div>
            <FontIcon className="material-icons">date_range</FontIcon>
            <DatePicker
              onChange={(event, date)=>this.setState({dateAvailableStart: date})}
              autoOk={false}
              floatingLabelText="Min Available Date"
              disableYearSelection={this.state.disableYearSelection}
            />
            <DatePicker
              onChange={(event, date)=>this.setState({dateAvailableEnd: date})}
              autoOk={false}
              floatingLabelText="Max Available Date"
              disableYearSelection={this.state.disableYearSelection}
            />
          </div>
        </div>
        <div>
          <div className="row" style = {{margin: "10px"}}>
            <div className = "container col-md-4 col-xs-12">
              <Map height='450px' width='450px' drawingAllowed={true} searchFilters={{
                bedsMax: this.state.bedsMax,
                bedsMin: this.state.bedsMin,
                bathsMax: this.state.bathsMax,
                bathsMin: this.state.bathsMin,
                priceMax: this.state.priceMax,
                priceMin: this.state.priceMin,
                dateAvailableEnd: this.state.dateAvailableEnd ? this.state.dateAvailableEnd : null,
                dateAvailableStart: this.state.dateAvailableStart ? this.state.dateAvailableStart : null
              }}/>
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
