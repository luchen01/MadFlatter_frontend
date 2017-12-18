import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import Map from '../components/Map';
// import GoogleMapReact from 'google-map-react';

const AppContainer = ({ name }) => {
    return (
        <div>
            <Title name={name} />
            <Map drawingAllowed={true} height="500px" width="500px"/>
        </div>
    );
};

AppContainer.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = (state) => {
    return {
        name: state.name
    };
};

const mapDispatchToProps = (/* dispatch */) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
