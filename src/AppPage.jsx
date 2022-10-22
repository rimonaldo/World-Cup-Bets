import { Component } from 'react'
// import '../styles/scss/global.scss'
import { AppPage } from './pages/HomePage'
import { Header } from './components/Organisms/Header'
import { ContactPage } from './pages/contact_/ListPage'
import { ContactDetailsPage } from './pages/contact_/TransferPage'
import { setLoggedUser } from './store/actions/userActions'
import { MinerHub } from './pages/MinerHubPage'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { LandingPage } from './AppLandingPage'
import { ContactEdit } from './pages/contact_/EditPage'
import { connect } from 'react-redux'

const PrivateRoute = props => {
   const user = props.user
   return user ? <Route {...props} /> : <Redirect to="/signup" />
}

class _PopCoin extends Component {
   render() {
      return (
         <Router>
            <div>
               <Header />
               <Switch>
                  <Route path="/" component={LandingPage} onSignup={this.onSignup} />
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

// REDUX CONFIGORATION
const mapStateToProps = state => {
   return {
      user: state.userModule.loggedUser,
   }
}
const mapDispatchToProps = { setLoggedUser }
export const PopCoin = connect(mapStateToProps, mapDispatchToProps)(_PopCoin)
