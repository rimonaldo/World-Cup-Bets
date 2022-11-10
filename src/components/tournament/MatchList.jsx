import React from 'react'
import useStore from '../../store/useStore'
import Match from './MatchCmp'
import { tournamentService } from '../../services/tournament.service'
export default function MatchList() {
   const matches = useStore(state => state.matches)
   const setTeam = useStore(state => state.setTeam)
   const teams = useStore(state => state.teams)

   function fetch() {
      tournamentService.getTeam(matches[0].home_team_id)
   }

   function getMatchTeams(match) {
      const home = teams.filter(team => team.id === match.home_team_id)[0]
      const away = teams.filter(team => team.id === match.away_team_id)[0]
      return { home, away }
   }
   return (
      <div className="matches">
         {matches.length
            ? matches.map(match => {
                 return <Match match={match} teams={getMatchTeams(match)} key={match.id} />
              })
            : 'loading'}
      </div>
   )
}
