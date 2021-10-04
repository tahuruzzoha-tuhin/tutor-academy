import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './utils/routes';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {

  const mainRoute = ["/", "/about", "/contact", "/allsubjects"];
  let location = window.location.pathname;

  const headerRoute = () => {

    if (mainRoute.includes(location)) {
      return <Header />
    }

  }

  const footerRout = () => {
    if (mainRoute.includes(location)) {
      return <Footer />
    }
  }

  return (
    <div className="App">
      <ReactNotification isMobile='true' />
      <Router>
        {
          headerRoute()
        }
        <Switch>
          {
            routes.map((route, index) => <Route path={route.path} key={index} exact={route.exact} component={route.components} />)
          }
        </Switch>
        {
          footerRout()
        }
      </Router>
    </div>
  );
}

export default App;
