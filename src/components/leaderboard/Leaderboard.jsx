import React, { useState, useEffect } from 'react'
import useStore from '../../store/useStore'
import TemplateTable from '../Templates/TemplateTable'
export default function Leaderboard() {
   const users = useStore(state => state.users)

   return (
      <>
         <TemplateTable
            title="Leadboard"
            thead={
               <>
                  <th>Leader</th>
                  <th>Points</th>
               </>
            }
            tbody={
               users.length ? (
                  users.map(user => {
                     return (
                        <tr key={user.id}>
                           <td>{user.name}</td>
                           <td>{user.points}</td>
                        </tr>
                     )
                  })
               ) : (
                  <tr>
                     <td colSpan={2} className='spinner'>loading</td>
                  </tr>
               )
            }
         />
      </>
   )
}
