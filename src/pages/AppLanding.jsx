import React, { useEffect } from 'react'
import Hero from '../components/hero/Hero'
import useStore from '../store/useStore'

export default function AppLanding(props) {
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
   useEffect(() => {
      function load() {
         if (loggedUser.username === 'rimonaldo') {
            loadApp()
         }
      }
   }, [])

   // useEffect()
   // DISPATCH SET LOGGED USER
   function onSignup() {
      setSignup(credentials)
      loadApp()
   }

   function onLogin() {
      setLogin(credentials)
      loadApp()
   }

   function loadApp() {
      console.log('load')
      if (loggedUser.username) {
         props.history.push('/home/leaderboard')
      }
   }
   return (
      <section className="landing-page">
         <Hero></Hero>
         {loggedUser ? loggedUser.username || loggedUser.name : 'no logged user'}
         <br />
         <input placeholder="username" type="text" onChange={ev => handleChange(ev)} name="username" />
         <input placeholder="password" type="text" onChange={ev => handleChange(ev)} name="password" />
         <button className="button" onClick={() => onLogin()}>
            Login
         </button>
         <br />
         <input placeholder="username" type="text" onChange={ev => handleChange(ev)} name="username" />
         <button className="button" onClick={() => onSignup()}>
            Signup
         </button>
      </section>
   )
}
