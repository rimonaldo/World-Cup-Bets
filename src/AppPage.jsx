
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import useStore from './store/useStore'
import AuthForm from './components/AuthForm'
const PrivateRoute = props => {
   const user = props.user
   return user ? <Route {...props} /> : <Redirect to="/signup" />
}
export default function AppPage() {
   const setHideModal = useStore(state => state.hideModal)
   const modalState = useStore(state => state.modalState)
   function hideModal(ev) {
      ev.stopPropagation()
      setHideModal()
   }
   return (
      <Router>
         <AuthForm></AuthForm>
         <div className={modalState.isModal ? 'screen blur' : 'screen'} onClick={(ev) => hideModal(ev)}> 
            <Switch>
               <Route path="/landing" component={LandingPage}/>
               <Route path="/" component={HomePage} />
            </Switch>
         </div>
      </Router>
   )
}
