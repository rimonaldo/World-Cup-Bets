import React from 'react'
import WcLogo from './WcLogo'
export default function Hero() {
   return (
      <section className="hero-container">
         <div className="text-style">
            <h1 className="display-exp">World Cup Bets</h1>
            <p className="body">
               World Cup Bets takes all your money in promise that you will win more money from it. you are probably
               going to lose all of it because you are a mug.
            </p>
         </div>
         <WcLogo />
      </section>
   )
}
