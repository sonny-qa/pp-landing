const React = require('react')
const ReactRouter = require('react-router')
const { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

const MainLayout = require('./components/MainLayout')
const Home = require('./components/Home')


export default (
  <Router history={browserHistory}>
    <Route component={MainLayout} path="/">
      <IndexRoute component={Home}></IndexRoute>
    </Route>
  </Router>
);

