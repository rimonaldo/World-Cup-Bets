import React from 'react'
import Leaderboard from '../components/Leaderboard'
import { Link } from 'react-router-dom'
import Tabs from '../components/Tabs'
import Tournament from '../components/Tournament'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
export default function HomePage() {

   let lead = <Leaderboard /> 
   function openTab(ev) {
      ev.preventDefault()
      console.log(ev.target.name)
   }

   return (
      // server state
      
      <Router>
         <section className="home-page main-layout">
            <Link to={'/landing'}>
               <button>back</button>
            </Link>
            <h1>HomePage</h1>

            {/* global data */}
            <Tabs func={openTab} />

            <Switch>
               {/* local data */}
               {/* <Leaderboard /> */}
               {lead}

               {/* server data */}
               <Tournament />

            </Switch>
         </section>
      </Router>
   )
}
