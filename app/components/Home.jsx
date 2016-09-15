const React = require('react')
const Navbar = require('./Navbar')

const brand = 'petroacademy'
const price = '$10'

const Home = React.createClass({
  render: function(){
    return (
        <div>
         <Navbar brand={brand} price={price} />
        </div>
        )
  }
})
  
module.exports = Home
