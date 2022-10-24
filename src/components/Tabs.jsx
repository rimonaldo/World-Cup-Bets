import React from 'react'

export default function tabs(props) {

   return (
      <div className="tabs">
         <button onClick={ev => props.func(ev)} name="leaderboard">Leaderboard</button>
         <button onClick={ev => props.func(ev)} name="upcoming">Upcoming</button>
         <button onClick={ev => props.func(ev)} name="tournament">Tournament</button>
      </div>
   )
}
