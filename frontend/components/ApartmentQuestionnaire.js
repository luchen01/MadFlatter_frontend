import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

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

  const minDate = new Date();
      const maxDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - 1);
      minDate.setHours(0, 0, 0, 0);
      maxDate.setFullYear(maxDate.getFullYear() + 1);
      maxDate.setHours(0, 0, 0, 0);

      this.state = {
        maxBedrooom: 0,
        minBedroom: 0,
        maxBathroom: 0,
        minBathroom: 0,
        minDate: minDate,
        maxDate: maxDate,
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
           value={this.state.minBedroom}
           onChange={(event, index, value)=>this.setState({minBedroom: value})}
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
            value={this.state.maxBedroom}
            onChange={(event, index, value)=>this.setState({maxBedroom: value})}
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
        </div>
        <div>
        <FontIcon className="material-icons"> wc </FontIcon><br/>
        <SelectField
           floatingLabelText="Min Bathrooms"
           value={this.state.minBathroom}
           onChange={(event, index, value)=>this.setState({minBathroom: value})}
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
            value={this.state.maxBathroom}
            onChange={(event, index, value)=>this.setState({maxBathroom: value})}
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
        </div>
        <div>
          <FontIcon className="material-icons">date_range</FontIcon><br/>
          <DatePicker
            onChange={this.handleChangeMinDate}
            autoOk={false}
            floatingLabelText="Min Available Date"
            defaultDate={this.state.minDate}
            disableYearSelection={this.state.disableYearSelection}
          />
          <DatePicker
            onChange={this.handleChangeMaxDate}
            autoOk={false}
            floatingLabelText="Max Available Date"
            defaultDate={this.state.maxDate}
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
        Map: Select your neighborhood
      </div>
    </div>
  </div>
        );
    }
  }

export default ApartmentQuestionnaire;
