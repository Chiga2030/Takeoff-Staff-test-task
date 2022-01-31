import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import AppNavBarContainer from '../AppNavBar/AppNavBarContainer';
import LoginPageContainer from '../LoginPage/LoginPageContainer';
import ContactsPage from '../ContactsPage/ContactsPage';


const App = () => (
  <Router>
    <div className="d-flex flex-column vh-100">
      <AppNavBarContainer />

      <Switch>
        <Route path='/' exact>
          <LoginPageContainer />
        </Route>

        <Route path='/login'>
          <LoginPageContainer />
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
