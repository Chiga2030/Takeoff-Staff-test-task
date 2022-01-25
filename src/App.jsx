import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import AppNavBar from './AppNavBar/AppNavBar';
import LoginPage from './LoginPage/LoginPage';
import ContactsPage from './ContactsPage/ContactsPage';


const App = () => (
  <Router>
    <div className="d-flex flex-column vh-100">
      <AppNavBar />

      <Switch>
        <Route path='/' exact>
          <LoginPage />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/contacts'>
          <ContactsPage />
        </Route>

        <Redirect to='/' />
      </Switch>
    </div>
  </Router>
);


export default App;
