const React = require('react')
const { PropTypes } = React

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
  children: PropTypes.node
}

module.exports = MainLayout
