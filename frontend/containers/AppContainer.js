import React from 'react';
// import Register from '../components/Register';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return(
      <div>
        This is the App Container.
        MadFlatter

      </div>
        );
    }
}

export default AppContainer;
