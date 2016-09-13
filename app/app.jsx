/*const React = require('react')
const ReactDOM = require('react-dom')
import Router from './router';


ReactDOM.render(Router, document.getElementById('root'))
*/
const React = require('react')
const ReactRouter = require('react-router')
const ReactDOM = require('react-dom')
const App = require('./router')


const MainLayout = require('./components/MainLayout')
const Routing = require('./components/Home')

ReactDOM.render(<Routing/>, document.getElementById('root'));


