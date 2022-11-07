import React, { useState, useEffect } from 'react'
import useStore from '../../store/useStore'
import TemplateTable from '../_text_styles/Templates/TemplateTable'
export default function Leaderboard() {
   const users = useStore(state => state.users)

   const tableData = {
      title: 'Leaderboard',
      headers: ['Leader', 'Points'],
      body: users.length ? (
         users.map(user => {
            return (
               <tr key={user._id || user.id}>
                  <td>{user.username || user.name}</td>
                  <td>{user.score || '0' || user.points}</td>
               </tr>
            )
         })
      ) : (
         <tr>
            <td colSpan={2} className="spinner">
               loading
            </td>
         </tr>
      ),
   }

   return (
      <section className="leaderboard">
         <TemplateTable title={tableData.title} tHeaders={tableData.headers} tbody={tableData.body} />
      </section>
   )
}
