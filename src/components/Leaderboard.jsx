import React from 'react'

export default function Leaderboard() {
   const users = [
      { id: 1, name: 'rimon', gender: 'male', points: 30 },
      { id: 2, name: 'tomer', gender: 'female', points: 20 },
      { id: 3, name: 'omri', gender: 'male', points: 13 },
      { id: 4, name: 'tzach', gender: 'male', points: 18 },
      { id: 5, name: 'iftach', gender: 'male', points: 12 },
      { id: 6, name: 'omer', gender: 'male', points: 5 },
      { id: 7, name: 'omerK', gender: 'male', points: 15 },
      { id: 8, name: 'stav', gender: 'male', points: 15 },
   ].sort((a, b) => {
      return b.points - a.points
   })

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
               {users.map(person => {
                  return (
                     <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.points}</td>
                     </tr>
                  )
               })}
            </tbody>
         </table>
      </>
   )
}
