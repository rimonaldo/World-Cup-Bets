import React from 'react'
import WcLogo from '../_molecules/WcLogo'
import TemplateDisplayBody from '../_text_styles/Templates/Template_DisplayBody'
export default function Hero() {

   const body = `World Cup Bets takes all your money in promise   
   that you will win more money from it. you are probably going
   to lose all of it because you are a mug.`
   
   return (
      <section className="hero-container">
         <TemplateDisplayBody display={'World Cup Bets'} body={body} />
         <WcLogo />
      </section>
   )
}
