import React, { useEffect } from 'react'
import Hero from '../components/hero/Hero'
import useStore from '../store/useStore'
import Header from '../components/header/HeaderLanding'
import AuthForm from '../components/AuthForm'
export default function AppLanding(props) {
   const loggedUser = useStore(state => state.loggedUser)

   useEffect(() => {
      function load() {
         if (loggedUser.username === 'rimonaldo') {
            loadApp()
         }
      }
   }, [])


   function loadApp() {
      console.log('load')
      // if (loggedUser.username) {
      //    props.history.push('/home/leaderboard')
      // }else{
      //    console.log('login first');
      // }
   }

   return (
      <section className="">
         <Header></Header>
         <Hero></Hero>
         {loggedUser ? loggedUser.username || loggedUser.name : 'no logged user'}
         <br />
         <AuthForm loadApp={loadApp}/>
      </section>
   )
}
