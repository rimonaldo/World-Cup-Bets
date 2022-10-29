import React from 'react'
import { Link } from 'react-router-dom'

export default function tabs({ tabs, baseUrl }) {
   return (
      <div className="tabs">
         {tabs.map(tab => {
            const tabName = tab.split('')[0].toUpperCase() + tab.slice(1, tab.length)
            return (
               <Link to={`${baseUrl}/${tab}`}>
                  <button className='tab' name={tabName}> {tabName}</button>
               </Link>
            )
         })}
      </div>
   )
}
