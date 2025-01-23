import './App.css'
import Dashboard from './Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact component={Dashboard} /> 
        </Switch>
      </main>
    </Router>
  )
}

export default App
