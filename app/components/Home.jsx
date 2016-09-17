const React = require('react')
const NavBar = require('./NavBar')
const JumboTron = require('./JumboTron')
const Summary = require('./Summary')

const brand = 'PETROACADEMY'
const price = '$10'

const test = require('../stylesheets/img/pipes-main.jpg')

const Home = React.createClass({
  render: function () {
    return (
      <div>
        <NavBar />
        <JumboTron />
        <Summary />
      </div>
        )
  }
})

module.exports = Home
