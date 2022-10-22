import React from 'react'
import WcLogo from './WcLogo'
import TemplateDisplayBody from './Templates/Template_DisplayBody'
export default function Hero() {
   return (
      <section className="hero-container">
         <TemplateDisplayBody />
         <WcLogo />
      </section>
   )
}
