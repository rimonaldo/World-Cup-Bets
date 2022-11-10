import React, { useState, useEffect } from 'react'
import { tournamentService } from '../../services/tournament.service'
import useStore from '../../store/useStore'
import useUserStore from '../../store/useUserStore'
export default function GroupTable({ group }) {
   // const [groupQuals, setGroupQuals] = useState({})
   const user = useUserStore(state => state.loggedUser)
   const setGroupLeader = useUserStore(state => state.setGroupLeader)

   async function selectQual({ target }) {
      const teamName = target.innerText
      const team = await tournamentService.getTeamByName(teamName)
      const group = team.groups.toLowerCase()
      let groupQuals = { [group]: teamName }
      // setGroupQuals({ ...groupQuals, [group]: teamName })
      const userId = user._id
      const bet = {'groupLeader':{[userId]:{group, team:{teamName,teamId:team.id}}}}
      // const betPrototype = {'betType':{[userId]:{'betData'}}}
      await setGroupLeader(bet)
      // document.querySelector('#'+updatedGroupQuals[group][1]).classList.add('qual')
      // document.querySelector('#'+updatedGroupQuals[group][0]).classList.toggle('qual')
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
                              <span className="" id={team.name_en} onClick={ev => selectQual(ev)}>
                                 {team.name_en}
                              </span>
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
