import React, { useState, useEffect } from 'react'
import useStore from '../store/useStore'

export default function Leaderboard() {
   const getUsers = useStore(state => state.users)
   const setUsers = useStore(state => state.setUsers)

   useEffect(() => {
      setUsers()
   },[])


   return (
      <>
         <table className="leaderboard">
            <thead>
               <tr>
                  <th colSpan={2} className="title">
                     LEADERBOARD
                  </th>
               </tr>
               <tr>
                  <th>Leader</th>
                  <th>Points</th>
               </tr>
            </thead>

            <tbody>
               {getUsers.length ? (
                  getUsers.map(user => {
                     return (
                        <tr key={user.id}>
                           <td>{user.name}</td>
                           <td>{user.points}</td>
                        </tr>
                     )
                  })
               ) : (
                  <tr>
                     <td colSpan={2}>loading</td>
                  </tr>
               )}
            </tbody>
         </table>
      </>
   )
}
