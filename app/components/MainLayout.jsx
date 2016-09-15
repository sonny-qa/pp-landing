const React = require('react')


const MainLayout = React.createClass({
  render: function () {
    return (
      <div >
          {this.props.children}
      </div>
        )
  }
})

MainLayout.propTypes = {
  children: React.PropTypes.node
} 

module.exports = MainLayout
