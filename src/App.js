import React from 'react';
import {Switch , Route} from 'react-router-dom';
import {GlobalStyle} from './global.styles';
import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser  :null,
    }
  }
  render() {
    return (
      <div>
          <GlobalStyle />
          <Navigation />
          <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route exact path = "/login" component = {SignInAndSignUp} />
          </Switch>
      </div>
    )
  }
}

export default App;
