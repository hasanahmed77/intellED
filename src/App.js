import './App.css';
import Home from './components/Home/Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Subjects from './pages/subjects/Subjects';
import Years from './pages/years/Years';
import Sessions from './pages/sessions/Sessions.js';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

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

          <Route exact path='/sessions'>
            <Sessions />
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
