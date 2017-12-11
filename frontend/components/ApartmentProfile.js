import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import axios from 'axios';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  toggle: {
    marginBottom: 16,
  },
};


class Apartmentprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          location: []
        };
    }

    render() {
        return(
          <div className = "infocontainer col-md-12 col-xs-12" >
            <div className="photo_slider" style = {{height: "400px"}}>
                <input type="radio" name="slider" className="slide-radio1" checked id="slider_1"/>
                <input type="radio" name="slider" className="slide-radio2" id="slider_2"/>
               <div className="slider-pagination">
                  <label htmlFor="slider_1" className="page1"/>
                  <label htmlFor="slider_2" className="page2"/>
               </div>
               <div className="next control">
               <label htmlFor="slider_1" className="numb1">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
           {/* <path d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z"/> */}
                </svg>
              </label>
             <label htmlFor="slider_2" className="numb2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
           {/* <path d="M298.3 256L131.1 81.9c-4.2-4.3-4.1-11.4.2-15.8l29.9-30.6c4.3-4.4 11.3-4.5 15.5-.2L380.9 248c2.2 2.2 3.2 5.2 3 8.1.1 3-.9 5.9-3 8.1L176.7 476.8c-4.2 4.3-11.2 4.2-15.5-.2L131.3 446c-4.3-4.4-4.4-11.5-.2-15.8L298.3 256z"/> */}
                </svg>
           </label>
              </div>
               <div className="previous control">
             <label htmlFor="slider_1" className="numb1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
             {/* <path d="M213.7 256L380.9 81.9c4.2-4.3 4.1-11.4-.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-.2L131.1 247.9c-2.2 2.2-3.2 5.2-3 8.1-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L213.7 256z"/> */}
            </svg>
              </label>
              <label htmlFor="slider_2" className="numb2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
             {/* <path d="M213.7 256L380.9 81.9c4.2-4.3 4.1-11.4-.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-.2L131.1 247.9c-2.2 2.2-3.2 5.2-3 8.1-.1 3 .9 5.9 3 8.1l204.2 212.7c4.2 4.3 11.2 4.2 15.5-.2l29.9-30.6c4.3-4.4 4.4-11.5.2-15.8L213.7 256z"/> */}
            </svg>
             </label>
             </div>
          <div className="slider slide_img_01"></div>
          <div className="slider slide_img_02"></div>
        </div>
        <div className="row" style = {{margin: "10px"}}>
          <div className = "container col-md-3 col-xs-12">
            Map
          </div>
          <div className = "container col-md-9 col-xs-12">
            <Tabs>
              <Tab label="Apartment Information">
                  <div>
                    <RaisedButton
                        primary={true}
                        style={{margin: '20px'}}
                        label = "Edit"
                      /><br/>
                  <h1>Neighborhood</h1>
                  <h1>Available Date</h1>
                  <h1>Description</h1>
                  <h1>Bedrooms</h1>
                  <h1>Bathroom</h1>
                  <h1>Laundry</h1>
                  <h1>Parking</h1>
                  <h1>Open House</h1>
                  </div>
                </Tab>
                <Tab label="Posted By" >
                  <h1>Name</h1>
                  <p>Description</p>
                  </Tab>
              </Tabs>
            </div>

          </div>
          </div>
        );
    }
}

export default Apartmentprofile;
