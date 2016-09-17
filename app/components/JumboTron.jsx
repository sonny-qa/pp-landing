const React = require('react')
const { Jumbotron, Button, Grid, Row, Col  } = require('react-bootstrap')


const JumboTron = React.createClass({
  render: function () {
    return ( 
      <Jumbotron>
        <div><h1>PETROACADEMY</h1><h3 >Some more text below</h3></div>
      </Jumbotron>

      )}
    })

module.exports = JumboTron
