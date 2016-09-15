const React = require('react')

const Navbar = React.createClass({
  render: function(){
    return (
        <div>
          <h1>{this.props.brand}</h1>
          <h3>{this.props.price}</h3>
        </div>
        )
  }
})
  
module.exports = Navbar
