import create from 'zustand'
import { userService } from '../services/user.service'
import { tournamentService } from '../services/tournament.service'
import { utilService } from '../services/util.service'
// define the store
const useStore = create(set => ({
   votes: 0,
   addVotes: () => set(state => ({ votes: state.votes + 1 })),
   subtractVotes: () => set(state => ({ votes: state.votes - 1 })),

   users: [],
   setUsers: async () => set({ users: await userService.getUsers() }),

   teams: [],
   setTeams: async () => set({ teams: await tournamentService.getTeams() }),

   matches: [],
   setMatches: async () => set({ matches: await tournamentService.getMatches() }),

   team: '',
   setTeam: async teamId => set({ team: tournamentService.getTeam(teamId) }),

   _id: '',
   set_id: () => set(state => ({ _id: utilService._makeId() })),

   loggedUser: userService.getLoggedUser() || null,
   login: async credentials => set({ loggedUser: await userService.login(credentials) }),
   signup: async credentials => set({ loggedUser: await userService.signup(credentials) }),

   modalState:{style:{'display':'none'},method:'signup'},
   showModal: (method) => set ({modalState: {style:{'display':''},method}}),
   hideModal: () => set ({modalState: {style:{'display':'none'}}}),
   // setModalState: (modalState) => set ({modalState: {'display':modalState}}),

   fruits: ['apple', 'banana', 'orange'],
   addFruits: fruit => {
      set(state => ({
         fruits: [...state.fruits, fruit],
      }))
   },
}))

export default useStore
