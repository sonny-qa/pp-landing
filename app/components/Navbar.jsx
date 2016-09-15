const React = require('react')
import { Navbar } from 'react-bootstrap'
require('../stylesheets/custom.css')


const NavBar = React.createClass({
  render: function () {
    return (
      <Navbar staticTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">{this.props.brand}</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
        )
  }
})

NavBar.propTypes = {
  brand: React.PropTypes.string,
}

module.exports = NavBar
