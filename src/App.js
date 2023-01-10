import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Info from './components/Info'
import NotFound from './components/NotFound'
import RegistrationForm from './components/RegistrationForm'
import Status from './components/Status'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/info" component={Info} />
    <Route exact path="/status" component={Status} />
    <Route exact path="/register" component={RegistrationForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
