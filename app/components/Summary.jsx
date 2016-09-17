const React = require('react')
const { Jumbotron, Button, Grid, Row, Col  } = require('react-bootstrap')

const Summary = React.createClass({
  render: function () {
    return ( 
       <Grid>
    <Row className="show-grid">
      <Col xs={6} md={4}>here is some text</Col>
      <Col xs={6} md={4}>here is some text</Col>
      <Col xs={6} md={4}>here is some text</Col>
    </Row>
    </Grid>

      )}
  })
    

module.exports = Summary
