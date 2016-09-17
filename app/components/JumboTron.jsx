const React = require('react')
const { Jumbotron, Button, Grid, Row, Col  } = require('react-bootstrap')
import Icon from '-!babel!svg-react!../stylesheets/img/new-svg.svg'

const JumboTron = React.createClass({
  render: function () {
    return ( 
      <Jumbotron>
        <div><h1><span><Icon /></span><b>PETRO</b>ACADEMY</h1><div></div><h3 >Online Courses Created by Leading Industry Professionals</h3></div>
      </Jumbotron>

      )}
    })

module.exports = JumboTron
