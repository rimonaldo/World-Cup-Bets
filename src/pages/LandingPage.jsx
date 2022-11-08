import React, { useEffect } from 'react'
import Hero from '../components/hero/Hero'
import useStore from '../store/useStore'
import HeaderLanding from '../components/header/HeaderLanding'
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
      if (loggedUser.username) {
         props.history.push('/home/leaderboard')
      }else{
         console.log('login first');
      }
   }

   return (
      <section className="">
         <HeaderLanding />
         <Hero />
      </section>
   )
}
