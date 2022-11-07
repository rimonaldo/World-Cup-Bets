import { httpService } from './http.service'
import { storageService } from './storage.service'
export const tournamentService = {
   getTeams,
   getMatches,
   getTeam,
   setColor,
   getTeamByName
}

async function getTeams() {
   // console.log('getting teams')
   // const teams = await storageService.get('teams')
   // console.log(teams);
   return await httpService.get('team')
}

async function getMatches() {
   // console.log('getting matches')
   return await httpService.get('tournament/match')
}

async function getTeam(teamId) {
   try {
      const teams = await getTeams()
      const team = teams.filter(team => team.id === teamId)[0]
      console.log('getting ' + team.name_en)
      return teams.filter(team => team.id === teamId)[0]
   } catch (error) {
      console.log(error)
   }
}

async function getTeamByName(teamName) {
   try {
      const teams = await getTeams()
      const team = await teams.filter(team => team.name_en === teamName)[0]
      return team
   } catch (error) {
      console.log(error)
   }
}

async function setColor(teamId, hex) {
   try {
      const teams = await getTeams()
      const team = teams.filter(team => team.id === teamId)[0]
      console.log('setting ' + hex + team.name_en)
      return await httpService.put('team/color',)
   } catch (error) {
      console.log(error)
   }
}

