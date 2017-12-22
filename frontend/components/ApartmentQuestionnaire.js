import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Map from './Map';
import {connect} from 'react-redux';
import axios from 'axios';
axios.defaults.withCredentials = true;
import {saveRegions, changeFilters} from '../actions/index';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class ApartmentQuestionnaire extends Component{
  constructor(props) {
    super(props);

    axios.get(`${process.env.URL}/regions`)
    .then((response) => {
      console.log(response.data.regions);
      this.props.toSaveRegions(response.data.regions.map(({north, south, east, west, time}) => ({north, south, east, west, time})))
    })

  const minDate = new Date();
      const maxDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - 1);
      minDate.setHours(0, 0, 0, 0);
      maxDate.setFullYear(maxDate.getFullYear() + 1);
      maxDate.setHours(0, 0, 0, 0);

      this.state = {
        // bedsMaxrooom: 0,
        // bedsMinroom: 0,
        // maxBathroom: 0,
        // minBathroom: 0,
        // minDate: minDate,
        // maxDate: maxDate,
        autoOk: false,
        disableYearSelection: false,
        chipData: [
          {key: 0, label: 'I have a fluffy friend', icon: 'pets'},
          {key: 1, label: 'Laundry in unit plz', icon: 'local_laundry_service'},
          {key: 2, label: 'Gym in building', icon: 'fitness_center'},
          {key: 3, label: 'Wheelchair access', icon: 'accessible'},
          {key: 4, label: 'Furnished', icon: 'local_florist'}
        ]
      };
    }

    handleChangeMinDate(event, date){
      this.setState({
        minDate: date,
      });
    };

    handleChangeMaxDate(event, date){
      this.setState({
        maxDate: date,
      });
    };

    handleRequestDelete(key){
      console.log('clicked!');
      let newChipData = this.state.chipData;
      const chipToDelete = newChipData.map(chip=>chip.key).indexOf(key);
      newChipData.splice(chipToDelete, 1);
      this.setState({chipData: newChipData})
    }

    // componentDidMount(){
    //   axios.get(`${process.env.URL}/regions`)
    //   .then((response) => {
    //     console.log(response.data.regions);
    //     this.props.toSaveRegions(response.data.regions.map(({north, south, east, west, time}) => ({north, south, east, west, time})))
    //   })
    // }

    render() {
        return(
      <div>
        <h1>Apartment Questions</h1>
      <div className = "row">
        <div className = "col-md-5 col-xs-12">
        <div>
        <FontIcon className="material-icons" style = {{margin: '5px'}}> hotel </FontIcon><br/>
        <SelectField
           floatingLabelText="Min Bedrooms"
           value={this.props.filters.bedsMin}
           onChange={(event, index, value)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {bedsMin: value}))}
         >
           <MenuItem value={"1"} primaryText="1" />
           <MenuItem value={"2"} primaryText="2" />
           <MenuItem value={"3"} primaryText="3" />
           <MenuItem value={"4"} primaryText="4" />
           <MenuItem value={"5"} primaryText="5" />
           <MenuItem value={"6"} primaryText="6" />
           <MenuItem value={"7"} primaryText="7" />
           <MenuItem value={"8"} primaryText="8" />
         </SelectField><br/>
         <SelectField
            floatingLabelText="Max Bedrooms"
            value={this.props.filters.bedsMax}
            onChange={(event, index, value)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {bedsMax: value}))}          >
            <MenuItem value={"1"} primaryText="1" />
            <MenuItem value={"2"} primaryText="2" />
            <MenuItem value={"3"} primaryText="3" />
            <MenuItem value={"4"} primaryText="4" />
            <MenuItem value={"5"} primaryText="5" />
            <MenuItem value={"6"} primaryText="6" />
            <MenuItem value={"7"} primaryText="7" />
            <MenuItem value={"8"} primaryText="8" />
          </SelectField><br/>
        </div>
        <div>
        <FontIcon className="material-icons"> wc </FontIcon><br/>
        <SelectField
           floatingLabelText="Min Bathrooms"
           value={this.props.filters.bathsMin}
           onChange={(event, index, value)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {bathsMin: value}))}
         >
           <MenuItem value={"1"} primaryText="1" />
           <MenuItem value={"2"} primaryText="2" />
           <MenuItem value={"3"} primaryText="3" />
           <MenuItem value={"4"} primaryText="4" />
           <MenuItem value={"5"} primaryText="5" />
           <MenuItem value={"6"} primaryText="6" />
           <MenuItem value={"7"} primaryText="7" />
           <MenuItem value={"8"} primaryText="8" />
         </SelectField><br/>
         <SelectField
            floatingLabelText="Max Bathrooms"
            value={this.props.filters.bathsMax}
            onChange={(event, index, value)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {bathsMax: value}))}
          >
            <MenuItem value={"1"} primaryText="1" />
            <MenuItem value={"2"} primaryText="2" />
            <MenuItem value={"3"} primaryText="3" />
            <MenuItem value={"4"} primaryText="4" />
            <MenuItem value={"5"} primaryText="5" />
            <MenuItem value={"6"} primaryText="6" />
            <MenuItem value={"7"} primaryText="7" />
            <MenuItem value={"8"} primaryText="8" />
          </SelectField><br/>
          <FontIcon className="material-icons"> money </FontIcon><br/>
          <SelectField
             floatingLabelText="Min Price"
             value={this.props.filters.priceMin}
             onChange={(event, index, value)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {priceMin: value}))}
           >
             <MenuItem value={"500"} primaryText="500" />
             <MenuItem value={"1000"} primaryText="1000" />
             <MenuItem value={"15000"} primaryText="1500" />
             <MenuItem value={"2000"} primaryText="2000" />
             <MenuItem value={"2500"} primaryText="2500" />
             <MenuItem value={"3000"} primaryText="3000" />
           </SelectField><br/>
           <SelectField
              floatingLabelText="Max Price"
              value={this.props.filters.priceMax}
              onChange={(event, index, value)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {priceMax: value}))}
            >
              <MenuItem value={"2000"} primaryText="2000" />
              <MenuItem value={"2500"} primaryText="2500" />
              <MenuItem value={"3000"} primaryText="3000" />
              <MenuItem value={"3500"} primaryText="3500" />
              <MenuItem value={"4000"} primaryText="4000" />
              <MenuItem value={"5000"} primaryText="5000" />
              <MenuItem value={"7500"} primaryText="7500" />
              <MenuItem value={"10000"} primaryText="10000" />
            </SelectField><br/>
        </div>
        <div>
          <FontIcon className="material-icons">date_range</FontIcon><br/>
          <DatePicker
            onChange={(event, date)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {dateAvailableStart: date}))}
            autoOk={false}
            floatingLabelText="Min Available Date"
            defaultDate={this.props.filters.dateAvailableEnd}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={(event, date)=>this.props.toChangeFilters(Object.assign({}, this.props.filters, {dateAvailableEnd: date}))}
            autoOk={false}
            floatingLabelText="Max Available Date"
            defaultDate={this.props.filters.dateAvailableEnd}
            disableYearSelection={this.state.disableYearSelection}
          />
        </div>
        <div>
          <FontIcon className="material-icons">playlist_add</FontIcon>Additional filters<br/>
          {this.state.chipData.map(chip=>{
            return(
              <Chip key = {chip.key}
                    style={styles.chip}
                    onRequestDelete={()=>this.handleRequestDelete(chip.key)}>
                    <Avatar icon = {<FontIcon className = "material-icons">{chip.icon}</FontIcon>}/>
                    {chip.label}
                  </Chip>
            )
          })}
        </div>
      </div>
      <div className = "col-md-7 col-xs-12">
        {this.props.regions ? <Map noMarkers={true} drawingAllowed={true}/> : null}
      </div>
    </div>
  </div>
        );
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    toSaveRegions: (regions) => dispatch(saveRegions(regions)),
    toChangeFilters: (filters) => dispatch(changeFilters(filters))
  }
}

const mapStateToProps = (state) => {
  return {
    regions: state.regions,
    filters: state.filters
  };
}

ApartmentQuestionnaire = connect(mapStateToProps, mapDispatchToProps)(ApartmentQuestionnaire);

export default ApartmentQuestionnaire;
