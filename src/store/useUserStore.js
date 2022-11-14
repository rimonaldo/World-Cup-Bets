import create from 'zustand'
import { userService } from '../services/user.service'
import { tournamentService } from '../services/tournament.service'
import { utilService } from '../services/util.service'
import { persist } from 'zustand/middleware'
// define the store
const useUserStore = create((set,get) => ({
   users: [],
   setUsers: async () => set({ users: await userService.getUsers() }),

   loggedUser: userService.getLoggedUser() || null,
   login: async credentials => set({ loggedUser: await userService.login(credentials) }),
   signup: async credentials => set({ loggedUser: await userService.signup(credentials) }),

   
   groupLeader:null,
   setGroupLeader: async (betType,bet) => set({groupLeader: await userService.setGroupLeader(betType,bet)}), 

   setBet: async (betType,bet) => set({groupLeader: await userService.setBet(betType,bet)}), 
   
   bets:{},
   // userBets:{groupLeader:{group:{teamName:String}},match:{matchId:String, homeScore:Number, awayScore:Number, scorers:Array }},
   userBets:{},
   loadUserBets: async userId => set({userBets: await userService.getUserBets(userId)}), 
   setUserBets: async (userId,userBets) => set({userBets: await userService.setUserBets(userId,userBets)}), 
   setDummyBets: async (userId) => set({userBets: await userService.setDummyBets(userId)}), 
}))


// const useFishStore = create(
//    persist(
//      (set, get) => ({
//        fishes: 0,
//        addAFish: () => set({ fishes: get().fishes + 1 }),
//      }),
//      {
//        name: 'food-storage', // unique name
//        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
//      }
//    )
//  )

export default useUserStore
