import { httpService } from './http.service'
import users from '../data/user.json'
import { storageService } from './storage.service'
const STORAGE_KEY = 'loggedUser'
const LOGGED_KEY = 'loggedUser'

export const userService = {
   login,
   signup,
   logout,
   removeUser,
   updateUser,
   getUsers,
   getById,
   getUser,
   _saveLocalUser,
   signupOthers,
   getAsyncUser,
   getLoggedUser,
   setGroupLeader,
   setBet,
   getUserBets,
   setUserBets,
   setDummyBets,
}

const gUser = {
   _id: 101,
   name: 'Rimon Sade',
   email: 'ochoahyde@renovize.com',
   phone: '+1 (968) 593-3824',
   coins: 100,
}

function getUser() {
   let user = JSON.parse(sessionStorage.getItem(LOGGED_KEY)) || gUser
   user.contacts = user.contacts || []
   return new Promise((resolve, reject) => {
      user ? resolve(user) : reject('no user is logged')
   })
}

async function getAsyncUser() {
   let user = await httpService.get(`user/${getUser()._id}`)
   user.contacts = user.contacts || []
   return new Promise((resolve, reject) => {
      user ? resolve(user) : reject('no user is logged')
   })
}

async function signup({ username = name.split(' ')[0].toLowerCase(), password = '123', email, phone, name, id }) {
   let signupInfo = { username, password, id }
   const user = await httpService.post('auth/signup', signupInfo)

   if (user) console.log(username, 'is logged')
   return _saveLocalUser(user)
}

async function signupOthers(contacts) {
   let userPromises = []
   contacts.map(contact => {
      // contact.username = contact.username.split(' '[0].toLowerCase())
      contact.password = '123'
      let signupInfo = contact
      userPromises.push(httpService.post('auth/signup', signupInfo))
   })

   return Promise.all(userPromises).then(signedUsers => {
      return new Promise(resolve => {
         resolve(signedUsers)
      })
   })
}

// *IDEA - sort helper funcion
const glist = users.sort((a, b) => {
   return b.points - a.points
})

async function getUsers() {
   // console.log('getting users')
   // need to be in TYPESCRIPT
   const gUsers = new Promise((resolve, reject) => {
      const users = glist
      users ? resolve(users) : reject('Could not get users')
   })
   try {
      const users = await httpService.get(`user/`)
      console.log(users)
      return (await httpService.get(`user/`)) || (await gUsers)
   } catch (error) {
      console.error(error)
   }
}

async function getById(userId) {
   const user = await httpService.get(`user/${userId}`)
   return user
}

async function login(credentials) {
   console.log('login with', credentials)
   const user = await httpService.post('auth/login', credentials)
   if (user) return _saveLocalUser(user)
}

async function logout() {
   console.log('login out')
   sessionStorage.removeItem(STORAGE_KEY)
   return await httpService.post('auth/logout')
}

async function removeUser(userId) {
   return httpService.delete(`user/${userId}`)
}
async function updateUser(user = null, username) {
   if (!user) {
      const users = await getUsers()
      user = users.find(user => user.username === username)
   }

   user = await httpService.put(`user/${user._id}`, user)
   console.log('updating', user)
   if (getLoggedUser()._id === user._id) _saveLocalUser(user)
   return user
}

async function setBet(betType, bet) {
   console.log(bet)
   console.log(`setting ${betType}`)
   return await httpService.put(`bet/${betType}`, bet)
}

async function addBet(betType, bet) {
   console.log(bet)
   console.log(`setting ${betType}`)
   return await httpService.put(`bet/${betType}`, bet)
}

async function editBet(betType, bet) {
   console.log(bet)
   console.log(`setting ${betType}`)
   return await httpService.put(`bet/${betType}`, bet)
}

function getLoggedUser() {
   return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || 'null')
}

function _saveLocalUser(user) {
   sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
   return user
}

async function setGroupLeader(betType, bet) {
   console.log(bet)
   console.log('setting group leader')
   bet = await httpService.put(`bet/${betType}`, bet)
   // localStorage.setItem('userBets', JSON.stringify(bet))
   return bet
}

function getEmpetyBets(userId) {
   return {
      isDummy: true,
      groupLeader: { a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '' },
      match: { matchId: '', homeScore: '', awayScore: '', scorers: [] },
      userId,
   }
}

async function getUserBets(userId) {
   let userBets = await httpService.get(`bet/${userId}`)
   if (userBets) {
      userBets = userBets
   } else {
      userBets = getEmpetyBets()
   }
   localStorage.setItem('userBets', JSON.stringify(userBets))
   console.log(userBets)
   return userBets
}

async function setDummyBets(userId) {
   let userBets = getEmpetyBets(userId)
   userBets = await httpService.post(`bet/dummy`, userBets)
   console.log('setting dummy bets: ')
   return userBets
}

async function setUserBets(userId, userBets) {
   userBets = await httpService.put(`bet/${userId}`, userBets)
   console.log('user bets are: ', userBets)
   return userBets
}
