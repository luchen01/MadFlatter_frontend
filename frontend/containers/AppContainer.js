import React from 'react';
import { connect } from 'react-redux';
import Map from '../components/Map';
import Background from '../components/Background';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ApartmentDisplay from '../components/ApartmentDisplay';
import RoommateDisplay from '../components/RoommateDisplay';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
// import Devices from 'material-ui/svg-icons/action/importantdevices';
import Chat from 'material-ui/svg-icons/communication/forum';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-DOM';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            city: '',
        };
    }

    explore() {
        if(this.state) {
            this.props.history.push(`/${this.state.search}`);
        }
    }

    render() {
        return(
      <div>
    <Background />
    <div className = "search container col-md-offset-6 col-md-3">
      <SelectField
         floatingLabelText="What are you looking for"
         value={this.state.search}
         onChange={(event, index, value)=>this.setState({search: value})}
       >
         <MenuItem value={"browseroommate"} primaryText="Roommates" />
         <MenuItem value={"browseapartment"} primaryText="Apartment" />
         <MenuItem value={"Both"} primaryText="Both" />
       </SelectField><br/>
       <SelectField
          floatingLabelText="Select your City"
          value={this.state.city}
          onChange={(event, index, value)=>this.setState({city: value})}
        >
          <MenuItem value={"San Francisco"} primaryText="San Francisco" />
          <MenuItem value={"Other"} primaryText="New York" />
          <MenuItem value={"Other"} primaryText="Los Angeles" />
        </SelectField><br/>
        <RaisedButton
            primary={true}
            style={{margin: '20px'}}
            icon={<FontIcon className="material-icons"> search </FontIcon>}
            label = "Explore"
            onClick = {()=>this.explore()}
          />
    </div>
    <h1 style = {{textAlign: 'center'}}>HOW MADFLATTER WORKS</h1>
     <div className="howto row">
         <div className = "infoContainer col-md-4">
           <img className = "icon" src = "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-5/128/questions-answers-256.png"/><br/>
           Tell us what you want.
         </div>
         <div className = "infoContainer col-md-4">
           <img className = "icon" src = "https://image.flaticon.com/icons/png/128/181/181548.png"/><br/>
           Pick from your matched roommates and apartments.
         </div>
         <div className = "infoContainer col-md-4">
           <img className = "icon" src = "https://image.flaticon.com/icons/png/512/25/25694.png"/><br/>
           Happy Moving Day!
       </div>
     </div><br/>
     <ApartmentDisplay /><br/>
     <Link to="/browseapartment" className = "seeMore">See More Apartments >>></Link>
     <RoommateDisplay />
     <Link to="/browseroommate" className = "seeMore">See More People >>></Link>
      </div>
        );
    }
}

export default AppContainer;
