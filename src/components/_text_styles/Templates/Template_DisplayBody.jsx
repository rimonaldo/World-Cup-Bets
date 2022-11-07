import React from 'react'

export default function DisplayBody({ display, body }) {
   return (
      <div className="ts-display-body">
         <h1 className="display-exp">{display}</h1>
         <p className="body">{body}</p>
      </div>
   )
}
