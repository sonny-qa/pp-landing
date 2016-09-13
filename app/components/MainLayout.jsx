const React = require('react')

const MainLayout = React.createClass({
  render: function(){
    return (
        <div >
         
          {this.props.children}
        </div>
        )
  }
})
  



module.exports = MainLayout
