const React = require('react')
const ReactRouter = require('react-router')
const { Router, Route, IndexRoute, browserHistory } = ReactRouter

const MainLayout = require('./components/MainLayout')
const Home = require('./components/Home')

const Routing = React.createClass({
  render: function () {
    return (
      <Router history={browserHistory}>
        <Route component={MainLayout} path="/">
          <IndexRoute component={Home} />

        </Route>
      </Router>
    )
  }
})

module.exports = Routing
