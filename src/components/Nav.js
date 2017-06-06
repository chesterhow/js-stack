// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { APP_TITLE } from '../constants/constants';
import '../stylesheets/nav.scss';

const Nav = ({ pathname }: { pathname: string }): React.Element<*> => {
  const devClassName = pathname === '/' ? 'nav--link-active' : '';
  const testClassName = pathname === '/testing' ? 'nav--link-active' : '';

  return (
    <nav className="nav">
      <h1 className="nav--title">{APP_TITLE}</h1>
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

export default Nav;
