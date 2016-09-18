const React = require('react')
const { Jumbotron, Button, Grid, Row, Col  } = require('react-bootstrap')
import Icon from '-!babel!svg-react!../stylesheets/img/new-svg.svg'


const JumboTron = React.createClass({
  render: function () {
    return (

  <div className="jumbotron jumbotron-billboard">
  <div className="img"></div>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
             <h1 ><Icon /><b>PETRO</b> ACADEMY</h1>
                    <h3 >Online Courses Created by World Leading Industry Professionals</h3>
            </div>
        </div>
    </div>
</div> 

 )}
})

module.exports = JumboTron
