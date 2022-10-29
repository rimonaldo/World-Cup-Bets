// import { apiService } from './api.service'
import { httpService } from './http.service'
// import users from '../data/user.json'
import axios from 'axios'
// const STORAGE_KEY = 'loggedUser'
// const LOGGED_KEY = 'loggedUser'
// const BASE_URL = 'http://api.cup2022.ir/api/v1'
export const tournamentService = {
   apiLogin,
   getTeams,
}

async function apiLogin() {
   console.log('fetch')
   const teams = await httpService.get('team')
   console.log(teams);
}

async function getTeams() {
   console.log('getting teams')
   const teams = await httpService.get('team')
   console.log(teams)
   return teams
}
