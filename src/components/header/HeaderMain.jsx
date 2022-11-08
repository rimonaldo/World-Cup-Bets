import React from 'react'
import Tabs from '../_molecules/Tabs'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Avatar from '../_molecules/Avatar'
export default function Header() {
   const tabs = ['leaderboard', 'groups', 'matches', 'MOD']
   return (
      <section className="header">
         <Router>
            <Link to={'/landing'}>
               <Avatar />
            </Link>
         </Router>
         <Tabs tabs={tabs} baseUrl={'/home'} typeClass={'label'} />
      </section>
   )
}
