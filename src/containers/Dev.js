import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/Nav';
import Tool from '../components/Tool';
import Footer from '../components/Footer';
import data from '../json/dev.json';
import '../stylesheets/dev.scss';

const Dev = ({ location }) => {
  const renderTools = () => (
    data.map(tool => (
      <Tool key={tool.name} tool={tool} />
    ))
  );

  return (
    <div className="dev">
      <Nav pathname={location.pathname} />
      {renderTools()}
      <Footer />
    </div>
  );
};

Dev.propTypes = {
  location: PropTypes.object.isRequired
};

export default Dev;
