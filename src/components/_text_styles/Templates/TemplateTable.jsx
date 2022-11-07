import React from 'react'

export default function TemplateTable(props) {
   const { title = 'title', thead = 'th', tbody = 'tb', tHeaders = [] } = props
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
         <table className="table">
            <thead>
               <tr>
                  <th colSpan={2} className="title">
                     {title}
                  </th>
               </tr>
               <tr>
                  {tHeaders.map(header => {
                     return <th key={_makeId()}>{header}</th>
                  })}
               </tr>
            </thead>
            <tbody>{tbody}</tbody>
         </table>
      </>
   )
}
