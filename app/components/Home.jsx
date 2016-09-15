const React = require('react')
const NavBar = require('./NavBar')

const brand = 'PETROACADEMY'
const price = '$10'

const Home = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar brand={brand} price={price} />
      </div>
        )
  }
})

module.exports = Home
