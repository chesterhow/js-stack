// @noflow

import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import Tool from '../components/Tool';
import Footer from '../components/Footer';
import data from '../json/test.json';
import '../stylesheets/test.scss';

const Test = ({ location }) => {
  const renderTools = () => (
    data.map(tool => (
      <Tool key={tool.name} tool={tool} />
    ))
  );

  return (
    <div className="test">
      <Nav pathname={location.pathname} />
      {renderTools()}
      <Footer />
    </div>
  );
};

Test.propTypes = {
  location: PropTypes.object.isRequired
};

export default Test;
