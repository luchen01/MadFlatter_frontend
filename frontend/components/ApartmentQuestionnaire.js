import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

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
        minDate: minDate,
        maxDate: maxDate,
        autoOk: false,
        disableYearSelection: false,
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

    handleClick(){
    console.log('clicked!')
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
           value={this.state.search}
           onChange={(event, index, value)=>this.setState({search: value})}
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
            value={this.state.search}
            onChange={(event, index, value)=>this.setState({search: value})}
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
           value={this.state.search}
           onChange={(event, index, value)=>this.setState({search: value})}
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
            value={this.state.search}
            onChange={(event, index, value)=>this.setState({search: value})}
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
          <FontIcon className="material-icons">playlist_add</FontIcon><br/>
          <Chip
         onClick={this.handleClick}
         // style={styles.chip}
       >
         <Avatar icon={<FontIcon className="material-icons">perm_identity</FontIcon>} />
         FontIcon Avatar Chip
       </Chip>
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
