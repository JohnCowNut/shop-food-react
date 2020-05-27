import React from 'react';
import { connect } from 'react-redux';
import {Switch , Route , Redirect} from 'react-router-dom';
import {GlobalStyle} from './global.styles';
import {setCurrentUser} from './redux/user/user.action';
import CheckoutPage from './pages/checkout-page/checkout-page.component'
import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CollectionPage from './pages/collection/collection.component';
import {auth, createUserProfileDocument } from './firebase/firebase.utilis';
import {selectCurrentUser} from "./redux/user/user.selectors";
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
   const {setCurrentUser}  = this.props;
    
  this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            }
          )
        })
      }else{
        setCurrentUser(userAuth)
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
          <Navigation  />
          <Switch>
            <Route exact path = "/" component = {HomePage}/>

            <Route exact path = "/checkout"
              render = { () =>  this.props.currentUser ? (<CheckoutPage/>) : (<Redirect to="/login" />)}
             />
            <Route exact path = "/login" render={() =>
             this.props.currentUser ? (
                <Redirect to ="/collection"/>
                ) : (
                <SignInAndSignUp/>
                )
              }
            />
            <Route  path = "/collection" component = {CollectionPage}/>  
          </Switch>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  currentUser : selectCurrentUser(state),
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
