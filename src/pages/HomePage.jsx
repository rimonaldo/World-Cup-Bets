import React, { useState, useEffect } from 'react'
import Leaderboard from '../components/leaderboard/Leaderboard'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Tournament from '../components/tournament/Tournament'
import Upcoming from './MatchList'
import useStore from '../store/useStore'
import Header from '../components/header/Header'
export default function HomePage() {
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

   return (
      // server state
      <Router>
         <Header />
         <section className="home-page main-layout">
            <Switch>
               {/* local data */}
               <Route path="/home/leaderboard" component={() => <Leaderboard />} />
               {/* server data */}
               <Route path="/home/groups" component={Tournament} />
               {/* server data */}
               <Route path="/home/matches" component={Upcoming} />
            </Switch>
         </section>
      </Router>
   )
}
