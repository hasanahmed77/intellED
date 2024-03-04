import './App.css';
import Home from './components/Home/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Subjects from './pages/subjects/Subjects';
import Years from './pages/years/Years';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path='/'>
          <Home />
          </Route>

          <Route exact path={["/IGCSE", '/AS', '/A2']}>
          <Subjects />
          </Route>

          <Route exact path={["/Chemistry", '/Physics', '/Maths']}>
          <Years />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
