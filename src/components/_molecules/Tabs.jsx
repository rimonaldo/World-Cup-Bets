import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { utilService } from '../../services/util.service'
export default function Tabs({ tabs, baseUrl, typeClass }) {
   return (
      <div className="tabs">
         {tabs.map(tab => {
            const tabName = tab.split('')[0].toUpperCase() + tab.slice(1, tab.length)
            return (
               <NavLink className={`tabs ${typeClass}`} key={utilService._makeId()} to={`${baseUrl}/${tab}`}>
                  {tabName}
               </NavLink>
            )
         })}
      </div>
   )
}
