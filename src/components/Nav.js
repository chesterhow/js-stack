import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../stylesheets/nav.scss';

const Nav = ({ pathname }) => {
  const devClassName = pathname === '/' ? 'nav--link-active' : '';
  const testClassName = pathname === '/testing' ? 'nav--link-active' : '';

  return (
    <nav className="nav">
      <h1 className="nav--title">JS Stack</h1>
      <div className="nav--links">
        <Link
          to="/"
          className={`nav--link ${devClassName}`}
        >Development</Link>
        <Link
          to="/testing"
          className={`nav--link ${testClassName}`}
        >Testing</Link>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default Nav;
