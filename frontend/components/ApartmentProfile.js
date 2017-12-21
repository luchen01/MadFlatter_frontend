import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import Toggle from 'material-ui/Toggle';
import axios from 'axios';
axios.defaults.withCredentials = true;
import Map from './Map';
import {GridList, GridTile} from 'material-ui/GridList';

const defaultImage = 'https://ssl.cdn-redfin.com/v186.4.0/images/no_photo_available_large.png';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    height: '400px',
    margin: '20px'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
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
          isAdmin: false,
          apartment: {
            address: 'null'
          }
        };
        console.log('in apartmentprofile');
    }

    componentDidMount(){
      axios.get(`${process.env.URL}/apartment/${this.props.match.params.aptid}`)
      .then((resp)=>{
          this.setState({apartment: resp.data.apartment});
      })
    }

    render() {
      var width = window.innerWidth / 5;
      console.log(this.state.apartment.pictures);
        return(
          <div className = "infocontainer col-md-12 col-xs-12" >
            <GridList style={styles.gridList} cols={2.2}>
              {this.state.apartment.pictures ? this.state.apartment.pictures.map((url, i) => (
                <GridTile
                  key={i}
                  style={{height: '400px'}}
                >
                  <img src={url} />
                </GridTile>
              )) : null}
            </GridList>
            <div className = "title">
              <h1>{this.state.title}</h1>
            </div>
            <div className="row" style = {{margin: "10px"}}>

              <div className = "container col-md-3 col-xs-12">
                {<Map oneListing={this.state.apartment} width={width + 'px'} height='400px'/>}
              </div>
              <div className = "container col-md-9 col-xs-12">
                <Tabs>
                  <Tab label="Apartment Information">
                      <div>
                        {this.state.isAdmin ?  <div><RaisedButton
                                                primary={true}
                                                style={{margin: '20px'}}
                                                label = "Edit"
                                              /><br/></div> : <div/>}
                    <List>
                      <ListItem
                        leftIcon={<FontIcon className="material-icons"> location_on </FontIcon>}
                         primaryText = "Address"
                         secondaryText = {this.state.apartment.address}
                       />
                      <ListItem
                        leftIcon={<FontIcon className="material-icons"> attach_money </FontIcon>}
                        primaryText = "Price"
                        secondaryText = {this.state.apartment.price}
                      />
                      <ListItem
                        leftIcon={<FontIcon className="material-icons"> date_range </FontIcon>}
                        primaryText = "Available Date"
                        secondaryText = {
                          this.state.apartment.dateAvailable ?
                          (new Date(this.state.apartment.dateAvailable)).toDateString() :
                          null
                        }
                      />
                      <ListItem
                        leftIcon={<FontIcon className="material-icons"> hotel </FontIcon>}
                        primaryText = "Bedrooms"
                        secondaryText = {this.state.apartment.beds}
                      />
                      <ListItem
                        leftIcon={<FontIcon className="material-icons"> wc </FontIcon>}
                        primaryText = "Bathroom"
                        secondaryText = {this.state.apartment.baths}
                      />
                      <ListItem
                        leftIcon={<FontIcon className="material-icons"> description </FontIcon>}
                        primaryText = "Description"
                      />{this.state.apartment.postBody}
                    </List>
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
