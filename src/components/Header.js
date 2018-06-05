import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink } from 'react-router';
import './Header.scss';

const Header = ({ className }) => (
  <div className={className}>
    <h1>Expero Shipping Planner</h1>
    <IndexLink to="/" activeClassName="route--active">
      Home
    </IndexLink>
    {/*
    {' · '}
    <Link to="/counter" activeClassName="route--active">
      Counter
    </Link>
     */}
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
