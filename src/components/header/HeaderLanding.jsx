import React, { useRef } from 'react'
import Tabs from '../_molecules/Tabs'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import useStore from '../../store/useStore'
export default function Header() {
   const setShowModal = useStore(state => state.showModal)
   function showModal(ev,method) {
      ev.stopPropagation()
      setShowModal(method)
   }
   return (
      <section className="header">
         <button className="login label" onClick={ev => showModal(ev, 'login')}>
            login
         </button>
         <button className="login label" onClick={ev => showModal(ev, 'signup')}>
            signup
         </button>

         <div className="authModal">
            {/* <AuthForm></AuthForm> */}
         </div>
      </section>
   )
}
