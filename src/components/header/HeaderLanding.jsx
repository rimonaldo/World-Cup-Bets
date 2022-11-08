import React, { useRef } from 'react'
import useStore from '../../store/useStore'
import Avatar from '../_molecules/Avatar'
export default function Header() {
   const setShowModal = useStore(state => state.showModal)
   function showModal(ev, method) {
      ev.stopPropagation()
      setShowModal(method)
   }

   return (
      <section className="header landing-header">
         <Avatar />
         <div className="auth-select">
            <button className="login label" onClick={ev => showModal(ev, 'login')}>
               login
            </button>
            <button className="login label" onClick={ev => showModal(ev, 'signup')}>
               signup
            </button>
         </div>
      </section>
   )
}
