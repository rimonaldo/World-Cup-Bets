import { Component } from 'react'
// import { Header } from './components/Organisms/Header'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { LandingPage } from './AppLandingPage'
import HomePage from './pages/HomePage'
const PrivateRoute = props => {
   const user = props.user
   return user ? <Route {...props} /> : <Redirect to="/signup" />
}

export class WCB extends Component {
   render() {
      return (
         <Router>
            <div>
               {/* <Header /> */}
               <Switch>
                  <Route path="/landing" component={LandingPage} onSignup={this.onSignup} />
                  <Route path="/" component={HomePage} />
               </Switch>
            </div>
         </Router>
      )
   }

   async componentDidMount() {}

   componentDidUpdate(prevProps) {
      if (prevProps.user !== this.props.user) {
         console.log('changed user', this.props.user.username)
      }
   }
}
