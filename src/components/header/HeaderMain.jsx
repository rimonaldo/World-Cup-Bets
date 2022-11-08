import React from 'react'
import Tabs from '../_molecules/Tabs'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AuthForm from '../AuthForm'
export default function Header() {
   const tabs = ['leaderboard', 'groups', 'matches', 'MOD']
   return (
      <section className="header">
         <Router>
            <Link to={'/landing'}>
               <button className="label">back</button>
            </Link>
         </Router>
         <Tabs tabs={tabs} baseUrl={'/home'} typeClass={'label'} />
         
         {/* <AuthForm></AuthForm> */}
      </section>
   )
}
