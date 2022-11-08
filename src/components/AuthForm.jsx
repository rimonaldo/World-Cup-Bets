import React, { useRef } from 'react'
import useStore from '../store/useStore'
export default function AuthForm(props) {
   const {loadApp} = props 
   const modalState = useStore(state => state.modalState)
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

   function onAuth(ev) {
      ev.preventDefault()
      modalState.method === 'login' ? setLogin(credentials) : setSignup(credentials)
      loadApp()
   }

   return (
      <div onClick={ev => ev.stopPropagation()} className="form-container" style={modalState.style}>
         <form className="auth login " onSubmit={(ev) => onAuth(ev)}>
            <input placeholder="username" type="text" onChange={ev => handleChange(ev)} name="username" />
            <input placeholder="password" type="text" onChange={ev => handleChange(ev)} name="password" />
            <button className="button">{modalState.method}</button>
         </form>
      </div>
   )
}
