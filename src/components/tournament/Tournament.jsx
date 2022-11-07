import React from 'react'
import { tournamentService } from '../../services/tournament.service'
import Group from '../_molecules/GroupCmp'
import useStore from '../../store/useStore'
import Tabs from '../_molecules/Tabs'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
export default function Tournament() {
   async function fetch() {
      return await tournamentService.getTeams()
   }
   const teams = useStore(state => state.teams)
   const user = useStore(state => state.loggedUser)
   function _getGroupLetters() {}
   const groups = 'ABCDEFGH'.split('')

   function setGroups() {
      const B = { name: 'B', gTeams: [...teams.filter(t => t.groups === 'B')] }
      const A = { name: 'A', gTeams: [...teams.filter(t => t.groups === 'A')] }
      const C = { name: 'C', gTeams: [...teams.filter(t => t.groups === 'C')] }
      const D = { name: 'D', gTeams: [...teams.filter(t => t.groups === 'D')] }
      const E = { name: 'E', gTeams: [...teams.filter(t => t.groups === 'E')] }
      const F = { name: 'F', gTeams: [...teams.filter(t => t.groups === 'F')] }
      const G = { name: 'G', gTeams: [...teams.filter(t => t.groups === 'G')] }
      const H = { name: 'H', gTeams: [...teams.filter(t => t.groups === 'H')] }

      const groups = [A, B, C, D, E, F, G, H]
      return groups
   }

   return (
      <div className="groups-container">
         {user.username}
         <section className="groups">
            {setGroups().map(group => {
               return <Group group={group} key={group.name} user={user}/>
            })}
         </section>
         <Router>
            <Switch>
            </Switch>
         </Router>
      </div>
   )
}
