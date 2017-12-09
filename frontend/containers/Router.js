import React from 'react';
import { Route } from 'react-router-DOM';
import AppContainer from './AppContainer';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Title from '../components/Title';
import Footer from '../components/Footer';


class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
      <div>
        <Title />
        <Route path={"/"} exact component = {AppContainer} />
        <Route path={"/register"} exact component = {Register} />
        <Route path={"/login"} exact component = {Login} />
        <Route path={"/profile/:userid"} exact component = {Profile} />
        <Footer />
      </div>
        );
    }


}

export default Router;
