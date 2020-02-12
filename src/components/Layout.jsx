import React from 'react';
import PropTypes from 'prop-types';
import '../sass/index.scss';

const Layout = ({ children }) => (
  <React.Fragment>
    <div>
      <main>{children}</main>
      <footer
        style={{
          padding: '1rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>
          {`© ${new Date().getFullYear()}, Built with `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </span>
      </footer>
    </div>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
