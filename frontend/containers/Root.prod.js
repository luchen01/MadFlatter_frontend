import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, HashRouter, BrowserRouter, Switch} from 'react-router-DOM';
// import Router from './Router';
import AppContainer from './AppContainer';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ApartmentProfile from '../components/ApartmentProfile';
import Title from '../components/Title';
import Footer from '../components/Footer';
import Questionnaire from '../components/Questionnaire';
import BrowseApartment from '../components/BrowseApartment';
import BrowseRoommate from '../components/BrowseRoommate';
import RoommateProfile from '../components/RoommateProfile';
import MyGroup from '../components/MyGroup';
import axios from 'axios';

class Root extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          user: ''
      };
  }

  // componentWillMount(){
  //   axios.get('http://localhost:3000/loggedin')
  // .then(response=>{
  //     console.log('response router', response);
  //     if(response.data) {
  //         this.setState({user:response.data});
  //     }
  // })
  // .catch(err=>console.log(err));
  // }

  render(){
    return (
      <Provider store={this.props.store}>
        <div>
        <BrowserRouter basename="/">
            <div>
                <Route path={"/"} component = {Title} />
                <Route exact path={"/"}  component = {AppContainer} />
                <Route exact path={"/register"} component = {Register} />
                <Route exact path={"/login"} component = {Login} />
                <Route exact path={"/questionnaire"} component={Questionnaire} />
                <Route exact path={"/profile/:userid"} component = {Profile} />
                <Route exact path={"/roommateprofile/:userid"} component = {RoommateProfile} />
                <Route exact path={"/mygroup/:groupid"} component = {MyGroup} />
                <Route exact path={"/apartment/:aptid"} component = {ApartmentProfile} />
                <Route exact path={"/browseapartment"} component = {BrowseApartment} />
                <Route exact path={"/browseroommate"} component = {BrowseRoommate} />
                <Route path={"/"} component = {Footer} />
          </div>
        </BrowserRouter>
      </div>
      </Provider>
    );
}
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
