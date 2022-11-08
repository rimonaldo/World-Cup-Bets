import React from 'react'
import useStore from '../store/useStore'
export default function AuthForm(props) {
   const credentials = {
      username: '',
      password: '123',
   }
   const loggedUser = useStore(state => state.loggedUser)
   const setLogin = useStore(state => state.login)
   const setSignup = useStore(state => state.signup)

   function handleChange({ target }) {
      const field = target.name
      const value = target.type === 'number' ? +target.value || '' : target.value
      credentials[field] = value
   }
   function onSignup() {
      setSignup(credentials)
      //   loadApp()
   }
   function onLogin(ev) {
      ev.preventDefault()
      setLogin(credentials)
      //   loadApp()
   }

   function loadApp() {
      console.log('load')
      if (loggedUser.username) {
         props.history.push('/home/leaderboard')
      }
   }
   return (
      <div className="form-container">
         <form className="auth login" onSubmit={ev => onLogin(ev)}>
            <input placeholder="username" type="text" onChange={ev => handleChange(ev)} name="username" />
            <input placeholder="password" type="text" onChange={ev => handleChange(ev)} name="password" />
            <button className="button">Login</button>
         </form>
      </div>
   )
}
