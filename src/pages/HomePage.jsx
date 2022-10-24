import React from 'react'
import Leaderboard from '../components/Leaderboard'
import { Link } from 'react-router-dom'
export default function HomePage() {
   return (
      // server state
      <section className='home-page main-layout'>
         <Link to={'/landing'}>
            <button>back</button>
         </Link>
         <h1>HomePage</h1>
         <Leaderboard />
      </section>
   )
}
