import './styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import List from './screens/List';
import Schedule from './screens/Schedule';
import Navbar from './components/Navbar';
import Particles from 'react-particles-js';
import { conf } from './assets/conf';

export default function App() {
  return (
    <Router>
      <Particles className='background' params={conf} />
      <Navbar />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/list-interview'>
          <List />
        </Route>
        <Route path='/schedule-interview'>
          <Schedule />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
