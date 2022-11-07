import React, { useEffect } from 'react'
import useStore from '../../store/useStore'
import { tournamentService } from '../../services/tournament.service'
export default function MatchCmp({ match, teams }) {
   const { home, away } = teams
    
   function propability(side) {
      const data =
         side === 'home'
            ? {
                 prob: match.home_probability + '%',
                 hex: home.hex || 'black',
              }
            : {
                 prob: match.away_probability + '%' || '50%',
                 hex: away.hex || 'red',
              }

      return data
   }

   return (
      <div className="mini-match-container">
         <header>Group {match.group}</header>

         <div className="match-details">
            <div className="teams">
               <div className="team home">
                  <div className="flag-container">
                     <img className="flag" src={match.home_flag} alt="" />
                  </div>
                  <span>{match.home_team_en}</span>
                  <div className="score">0</div>
               </div>
               <div className="team away">
                  <div className="flag-container">
                     <img className="flag" src={match.away_flag} alt="" />
                  </div>
                  <span>{match.away_team_en === 'Nederland' ? 'Netherland' : match.away_team_en}</span>
                  <div className="score">
                     <button>U</button>
                     0
                     <button>D</button>
                  </div>
               </div>
            </div>
            <div className="scheduled">
               <div className="date">
                  {match.local_date.split(' ')[0].split('/')[1] + '.' + match.local_date.split(' ')[0].split('/')[0]}
               </div>
               <div className="time">18:00</div>
            </div>
         </div>

         <div className="probability-container">
            <div className="team-names">
               <div className="name">
                  <span>{home.name_en}</span>
                  <div style={{ color: propability('home').hex }}>{propability('home').prob}</div>
               </div>

               <div className="name">
                  <span>{away.name_en}</span>
                  <div style={{ color: propability('away').hex }}>{propability('away').prob}</div>
               </div>
            </div>

            <div className="chart">
               <div
                  className="home"
                  style={{ width: propability('home').prob, background: propability('home').hex }}
               ></div>
               <div className="draw"></div>
               <div
                  className="away"
                  style={{ width: propability('away').prob, background: propability('away').hex }}
               ></div>
            </div>
         </div>
      </div>
   )
}
