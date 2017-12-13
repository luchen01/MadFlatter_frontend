import React from 'react';
import { Route } from 'react-router-DOM';
import AppContainer from './AppContainer';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ApartmentProfile from '../components/ApartmentProfile';
import Title from '../components/Title';
import Footer from '../components/Footer';
import BrowseApartment from '../components/BrowseApartment';
import BrowseRoommate from '../components/BrowseRoommate';
import RoommateProfile from '../components/RoommateProfile';
import MyGroup from '../components/MyGroup';



class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
      <div>
        <Title isLoggedIn = {false}/>
        <Route path={"/"} exact component = {AppContainer} />
        <Route path={"/register"} exact component = {Register} />
        <Route path={"/login"} exact component = {Login} />
        <Route path={"/profile/:userid"} exact component = {Profile} />
        <Route path={"/roommateprofile/:userid"} exact component = {RoommateProfile} />
        <Route path={"/mygroup/:groupid"} exact component = {MyGroup} />
        <Route path={"/apartmentprofile"} exact component = {ApartmentProfile} />
        <Route path={"/browseapartment"} exact component = {BrowseApartment} />
        <Route path={"/browseroommate"} exact component = {BrowseRoommate} />
        <Footer />
      </div>
        );
    }


}

export default Router;
