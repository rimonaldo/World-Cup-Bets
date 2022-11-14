import React, { useState, useEffect } from 'react'
import Leaderboard from '../components/leaderboard/Leaderboard'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import GroupList from '../components/tournament/GroupList'
import Upcoming from '../components/tournament/MatchList'
import useStore from '../store/useStore'
import useUserStore from '../store/useUserStore'
import Header from '../components/header/HeaderMain'

export default function HomePage() {
   const loggedUser = useUserStore(state=>state.loggedUser)
   const userId = loggedUser._id
   const setUsers = useStore(state => state.setUsers)
   useEffect(() => {
      setUsers()
   }, [])

   const setTeams = useStore(state => state.setTeams)
   useEffect(() => {
      setTeams()
   }, [])

   const setMatches = useStore(state => state.setMatches)
   useEffect(() => {
      setMatches()
   }, [])

   const userBets = useUserStore.getState().userBets


   return (
      // server state
      <Router>
         <Header />
         <section className="home-page main-layout">
            <Switch>
               {/* local data */}
               <Route path="/home/leaderboard" component={() => <Leaderboard />} />
               {/* server data */}
               <Route path="/home/groups" component={() => <GroupList userId={userId} />} />
               {/* server data */}
               <Route path="/home/matches" component={Upcoming} />
            </Switch>
         </section>
      </Router>
   )
}
