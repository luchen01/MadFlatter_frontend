import React from 'react';
import { Route } from 'react-router-DOM';
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

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentWillMount(){
      console.log('inside router');
      axios.get('http://localhost:3000/loggedin')
    .then(response=>{
        console.log('response router', response);
        if(response.data) {
            this.setState({user:response.data});
        }
    })
    .catch(err=>console.log(err));
    }

    render() {
        return(
      <div>
        <Title isLoggedIn = {this.state.user ? true : false } user = {this.state.user}/>
        <Route path={"/"} exact component = {AppContainer} />
        <Route path={"/register"} exact component = {Register} />
        <Route path={"/login"} exact component = {Login} />
        <Route path={"/questionnaire"} component={Questionnaire} />
        <Route path={"/profile/:userid"} exact component = {Profile} />
        <Route path={"/roommateprofile/:userid"} exact component = {RoommateProfile} />
        <Route path={"/mygroup/:groupid"} exact component = {MyGroup} />
        <Route path={"/apartment/:aptid"} exact component = {ApartmentProfile} />
        <Route path={"/browseapartment"} exact component = {BrowseApartment} />
        <Route path={"/browseroommate"} exact component = {BrowseRoommate} />
        <Footer />
      </div>
        );
    }


}

export default Router;
