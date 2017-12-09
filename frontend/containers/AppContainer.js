import React from 'react';
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


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            city: '',
        };
    }

    render() {
        return(
      <div>
        {/* <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
        </video> */}
    <Background />
    <h1 style = {{textAlign: 'center'}}>HOW MADFLATTER WORKS</h1>
     <div className="howto row">
         <div className = "infoContainer col-md-4">
           <img className = "icon" src = "https://cdn0.iconfinder.com/data/icons/social-messaging-productivity-5/128/questions-answers-256.png"/><br/>
           Tell us what you want.
         </div>
         <div className = "infoContainer col-md-4">
           <img className = "icon" src = "http://www.yoroommate.com/Amsterdam-Room-Roommate-Finder/images/member.png"/><br/>
           Pick from your matched roommates and apartments.
         </div>
         <div className = "infoContainer col-md-4">
           <img className = "icon" src = "https://image.flaticon.com/icons/png/512/25/25694.png"/><br/>
           Happy Moving Day!
       </div>
     </div><br/>

     <ApartmentDisplay /><br/>
     <RoommateDisplay />
     <div className = "search container col-md-3 col-xs-10">
       <SelectField
          floatingLabelText="What are you looking for"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Roommates" />
          <MenuItem value={2} primaryText="Apartment" />
          <MenuItem value={3} primaryText="Both" />
        </SelectField><br/>
        <SelectField
           floatingLabelText="Select your City"
           value={this.state.value}
           onChange={this.handleChange}
         >
           <MenuItem value={1} primaryText="San Francisco" />
           <MenuItem value={2} primaryText="New York" />
           <MenuItem value={3} primaryText="Los Angeles" />
         </SelectField><br/>
         <RaisedButton
             primary={true}
             style={{margin: '20px'}}
             label = "Explore"
           />
     </div>
      </div>
        );
    }
}

export default AppContainer;
