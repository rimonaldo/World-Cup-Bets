import create from 'zustand'
import { userService } from '../services/user.service'
// define the store
const useStore = create(set => ({
   votes: 0,
   addVotes: () => set(state => ({ votes: state.votes + 1 })),
   subtractVotes: () => set(state => ({ votes: state.votes - 1 })),
   users: [],
   setUsers: async () => set({ users: await userService.getUsers() }),

   fruits: ['apple', 'banana', 'orange'],
   addFruits: fruit => {
      set(state => ({
         fruits: [...state.fruits, fruit],
      }))
   },
}))

export default useStore
