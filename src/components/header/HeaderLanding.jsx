import React from 'react'
import Tabs from '../_molecules/Tabs'
import { Link } from 'react-router-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import AuthForm from '../AuthForm'
export default function Header() {
   const tabs = ['login', 'signup']
   return (
      <section className="header">
         {/* <Tabs tabs={tabs} baseUrl={'/home'} typeClass={'label'} /> */}
         <button className="login label">login</button>
         <button className="login label">signup</button>

         <div className="authModal">
            <AuthForm></AuthForm>
         </div>
      </section>
   )
}
