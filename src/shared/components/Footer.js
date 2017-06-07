// @flow

import React from 'react';
import { GITHUB_REPO_URL } from '../constants/constants';
import '../stylesheets/footer.scss';

const Footer = (): React.Element<*> => (
  <footer className="footer">
    <span className="footer--text">View on&nbsp;</span>
    <a
      href={GITHUB_REPO_URL}
      rel="noopener noreferrer"
      className="footer--link"
      target="_blank"
    >GitHub</a>
  </footer>
);

export default Footer;
