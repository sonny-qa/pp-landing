const React = require('react')
const { Navbar, Container } = require('react-bootstrap')
const styles = require('../stylesheets/custom.css')

import Icon from '-!babel!svg-react!../stylesheets/img/new-svg.svg'

const NavBar = React.createClass({
  render: function () {
    return (
      <Navbar staticTop className={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <Icon />
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
