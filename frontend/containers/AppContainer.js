import React from 'react';
import Background from '../components/Background';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
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
     <div className="howto container">
       <h1>HOW MADFLATTER WORKS</h1>
     </div>
     <div className = "search container">
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
