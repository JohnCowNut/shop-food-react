import React from 'react';
import {Switch , Route} from 'react-router-dom';
import {GlobalStyle} from './global.styles';
import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CollectionPage from './pages/collection/collection.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utilis';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser  :null,
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot => {
          this.setState ({
            currentUser: {
              id: snapShot.id,
              ... snapShot.data()
            }

          })
        })
      }else{
        this.setState({currentUser: userAuth})
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
          <GlobalStyle />
          <Navigation currentUser = {this.state.currentUser} />
          <Switch>
            <Route exact path = "/" component = {HomePage}/>
            <Route exact path = "/login" component = {SignInAndSignUp} />
            <Route  path = "/collection" component = {CollectionPage}/>  
          </Switch>
      </div>
    )
  }
}

export default App;
