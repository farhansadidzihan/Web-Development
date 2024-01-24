import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary"/>
    <div className="container-fluid mx-6">
        <h1 style={{ textAlign : 'center', border: "5px solid navy" }}> React Based Todo List </h1>
        {/* <h2> {props.title} </h2> */}
        {/* {props.searchBar ? <p> This is True </p> : <p> Sorry False </p>} */}
        <Link to="/about"> About </Link>
    </div>
    </>
  )
}

Header.defaultProps = {
  title: "Title",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}