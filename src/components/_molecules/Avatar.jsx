import React from 'react'
import useStore from '../../store/useStore'
export default function Avatar() {
   const loggedUser = useStore(state => state.loggedUser)
   return (
      <div className="avatar-container">
         {loggedUser ? <div className="avatar">{loggedUser.username.charAt(0).toUpperCase()}</div> : ''}
      </div>
   )
}
