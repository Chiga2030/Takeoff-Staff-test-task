import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavBar from './AppNavBar/AppNavBar';
import LoginPage from './LoginPage/LoginPage';

const App = () => (
  <div className="d-flex flex-column vh-100">
    <AppNavBar />

    <LoginPage />
  </div>
);


export default App;
