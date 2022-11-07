import React from 'react'
import { tournamentService } from '../../services/tournament.service'
export default function GroupTable({ group }) {
   async function selectQual({ target }) {
      const teamName = target.innerText
      const team = await tournamentService.getTeamByName(teamName)
      const group = team.groups
      console.log(group);
   }
   return (
      <>
         <table key={group.name} className="table group">
            <caption className="title">Group {group.name}</caption>
            <thead>
               <tr>
                  <th></th>
                  <th className="team">Team</th>
                  <th>PTS</th>
                  <th>W</th>
                  <th>D</th>
                  <th>L</th>
                  <th>GP</th>
                  <th>GD</th>
               </tr>
            </thead>
            <tbody>
               {group.gTeams.length ? (
                  group.gTeams.map((team, idx) => {
                     return (
                        <tr className="label" key={team._id}>
                           <td>{idx + 1}</td>
                           <td className="team">
                              <div className="flag-container">
                                 <img className="flag" src={team.flag} alt="" />
                              </div>
                              <span onClick={ev => selectQual(ev)}>{team.name_en}</span>
                           </td>
                           <td>0</td>
                           <td>0</td>
                           <td>0</td>
                           <td>0</td>
                           <td>0</td>
                           <td>0</td>
                        </tr>
                     )
                  })
               ) : (
                  <tr>
                     <td className="spinner">loading</td>
                  </tr>
               )}
            </tbody>
         </table>
      </>
   )
}
