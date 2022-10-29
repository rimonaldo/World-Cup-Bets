import React from 'react'

export default function TemplateTable({ title = 'Title', thead = 'thead', tbody = 'tbody' }) {
   function _makeId(length = 10) {
      var txt = ''
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      for (var i = 0; i < length; i++) {
         txt += possible.charAt(Math.floor(Math.random() * possible.length))
      }
      return txt
   }

   return (
      <>
         <table className="leaderboard table">
            <thead>
               <tr>
                  <th colSpan={2} className="title">
                     {title}
                  </th>
               </tr>
               <tr>{thead}</tr>
            </thead>
            <tbody>{tbody}</tbody>
         </table>
      </>
   )
}





