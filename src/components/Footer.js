import React from 'react';
import '../stylesheets/footer.scss';

const Footer = () => (
  <footer className="footer">
    <span className="footer--text">View on&nbsp;</span>
    <a
      href="https://github.com/chesterhow/js-stack"
      rel="noopener noreferrer"
      className="footer--link"
      target="_blank"
    >GitHub</a>
  </footer>
);

export default Footer;
