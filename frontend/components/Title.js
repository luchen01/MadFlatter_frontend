import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Title = ({name}) => {  
  return (
    <div>
      <h1>{name}</h1>
      <div id='map' style={{height: '500px', width: '500px'}}></div>
    </div>
  );
};

Title.propTypes = {
    name: PropTypes.string,
};


export default Title;
