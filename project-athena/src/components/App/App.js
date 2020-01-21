import React, {Component} from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import homePage from '../Home/homePage';
import aboutPage from '../About/aboutPage';
import contactPage from '../Contact/contactPage';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Layout';
import NavigationBar from '../Navigation/NavigationBar';

class App extends Component {
  render() {
    return (
      // React.Fragment is another version of div or wrappers
      //Switch is used to switch between the different routes to display the diff. pages
      <React.Fragment>
        <NavigationBar/>
          <Layout>
          <Router>
            <Switch>
              <Route exact path="/home" component={homePage}/>
              <Route exact path="/about" component={aboutPage}/>
              <Route exact path="/contact" component={contactPage}/>
              <Route exact path="/signIn" component={SignIn}/>
              <Route exact path="/signUp" component={SignUp}/>
            
            </Switch>
            </Router>
          </Layout>
  

      </React.Fragment>
    );
  }
}


export default App;



