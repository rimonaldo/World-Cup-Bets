import React, { useState, useEffect } from 'react'
import { tournamentService } from '../../services/tournament.service'
import useStore from '../../store/useStore'
import useUserStore from '../../store/useUserStore'
export default function GroupTable({ group, userBets }) {
   const groupName = group.name.toLowerCase()
   const user = useUserStore(state => state.loggedUser)
   // const groupLeader = useUserStore(state=> state.groupLeader)
   const setUserBets = useUserStore(state => state.setUserBets)
   const setBet = useUserStore(state => state.setBet)

   // const groupLeader = userBets.groupLeaders
   // useEffect(() => {
   //    userBets
   // }, [])
   
   async function selectQual({ target }) {
      const betType = 'groupLeader'
      let userBetsCopy = JSON.parse(JSON.stringify(userBets))
      const userId = user._id
      const teamName = target.innerText
      const groupLeader = { ...userBetsCopy[betType], [groupName]: teamName }
      userBetsCopy.isDummy = false
      userBetsCopy[betType] = groupLeader
      console.log(userBetsCopy)
      await setUserBets(userId, userBetsCopy)
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
                              <span
                                 className={userBets.groupLeader[groupName] === team.name_en ? 'qual' : ''}
                                 id={team.name_en}
                                 onClick={ev => selectQual(ev)}
                              >
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
