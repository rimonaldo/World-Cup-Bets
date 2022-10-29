import React from 'react'
import { tournamentService } from '../services/tournament.service'
import Group from './GroupCmp'
import useStore from '../store/useStore'
import Tabs from './Tabs'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
export default function Tournament() {
   async function fetch() {
      return await tournamentService.getTeams()
   }
   const teams = useStore(state => state.teams)

   function _getGroupLetters() {}
   const groups = 'ABCDEFGH'.split('')

   return (
      <div>
         Tournament
         <Tabs tabs={groups} baseUrl={'/home/tournament'}></Tabs>
         <Group team={teams}></Group>


         <Router>
            <Switch>
               {/* local data */}
               {groups.map(g =>{
                  <Route path={`/home/tournament/${g}`} component={Group}  />
               })}
            </Switch>
         </Router>
      </div>
   )
}
