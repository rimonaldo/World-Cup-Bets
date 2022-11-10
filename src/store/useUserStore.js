import create from 'zustand'
import { userService } from '../services/user.service'
import { tournamentService } from '../services/tournament.service'
import { utilService } from '../services/util.service'
// define the store
const useUserStore = create(set => ({
   users: [],
   setUsers: async () => set({ users: await userService.getUsers() }),

   loggedUser: userService.getLoggedUser() || null,
   login: async credentials => set({ loggedUser: await userService.login(credentials) }),
   signup: async credentials => set({ loggedUser: await userService.signup(credentials) }),

   
   groupLeader:null,
   setGroupLeader: async team => set({groupLeader: await userService.setGroupLeader(team)}), 
}))


export default useUserStore
