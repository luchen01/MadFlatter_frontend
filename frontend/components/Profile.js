import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div>
            <h1>Profile Page</h1>
          </div>
        );
    }
}

/* Layout should include features like profile picture (could be imported from
Facebook and will be the default if the user logged in with Facebook), age,
compatibility ranking, and maybe some extra sections devoted to bio, perks of
being their roommate, etc. */

export default Profile;
