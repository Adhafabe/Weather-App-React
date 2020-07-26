import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Location = ({city}) => ( 
    <div className="location">
        <h1>{city}</h1>
    </div>
  );
Location.propTypes={
    city:PropTypes.string.isRequired,
};
export default Location;