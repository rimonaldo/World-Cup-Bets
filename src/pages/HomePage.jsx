import React, { useState, useEffect } from 'react'
import Leaderboard from '../components/leaderboard/Leaderboard'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Tabs from '../components/Tabs'
import Tournament from '../components/Tournament'
import Upcoming from './Upcoming'
import useStore from '../store/useStore'
export default function HomePage() {
   const setUsers = useStore(state => state.setUsers)
   const setTeams = useStore(state => state.setTeams)

   useEffect(() => {
      setUsers()
   }, [])

   useEffect(() => {
      setTeams()
   }, [])

   return (
      // server state

      <Router>
         <section className="home-page main-layout">
            <Link to={'/landing'}>
               <button>back</button>
            </Link>
            <h1>HomePage</h1>

            {/* global / url data */}
            <Tabs tabs={['leaderboard','tournament','upcoming']} baseUrl={'/home'}/>

            <Switch>
               {/* local data */}
               {/* <Route path="/home/leaderboard" element={<Leaderboard />} /> */}
               <Route path="/home/leaderboard" component={() => <Leaderboard />} />
               {/* server data */}
               <Route path="/home/tournament" component={Tournament} />
               {/* server data */}
               <Route path="/home/upcoming" component={Upcoming} />
            </Switch>
         </section>
      </Router>
   )
}
