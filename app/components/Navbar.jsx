const React = require('react')
const { Navbar } = require('react-bootstrap')
const styles = require('../stylesheets/custom.css')
const logo = require('../stylesheets/img/logo-main.png')


const NavBar = React.createClass({
  render: function () {
    return (
      <Navbar staticTop className={styles.navbar}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><img src={logo}/></a>
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
