import { HashRouter as Router, Route, Switch, Redirect,  } from 'react-router-dom'
import { useHistory } from 'react-router'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import useStore from './store/useStore'
import AuthModal from './components/AuthModal'
const PrivateRoute = props => {
   const user = props.user
   return user ? <Route {...props} /> : <Redirect to="/signup" />
}
export default function AppPage(props) {
   const modalState = useStore(state => state.modalState)
   const setHideModal = useStore(state => state.hideModal)
   function hideModal(ev) {
      ev.stopPropagation()
      setHideModal()
   }

   function loadPage() {
      console.log(props)
      
   }



   return (
      <Router>
         <AuthModal loadPage={loadPage} />
         <div className={modalState.isModal ? 'screen blur' : 'screen'} onClick={ev => hideModal(ev)}>
            <Switch>
               <Route path="/landing" component={LandingPage} />
               <Route path="/" component={HomePage} />
            </Switch>
         </div>
      </Router>
   )
}
