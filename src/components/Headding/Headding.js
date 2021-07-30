import React from 'react';
import PropTypes from 'prop-types';

export default function Headding({title}) {
    return (
        <div>
            <h1> {title} </h1>
        </div>
    )
}

Headding.propTypes = {
    title: ''
  };

 Headding.defautPropTypes = {
    title: PropTypes.string
  };

