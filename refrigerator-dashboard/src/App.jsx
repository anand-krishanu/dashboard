import './App.css'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Dashboard from './Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
