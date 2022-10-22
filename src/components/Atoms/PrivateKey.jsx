import { useState } from 'react'
import { useSelector } from 'react-redux'
import { createRef } from 'react'
export const PrivateKey = props => {
   const { loggedUser } = useSelector(state => state.userModule)
   const [isShown, setIsShown] = useState(false)

   //    if (!isShown) return
   function handleChange({ target }) {}

   const inputRef = createRef()
   function ref() {
      inputRef.current.select()
   }

   return (
      <>
         <div className="key-box">
            <input ref={inputRef} className="key" onChange={handleChange} type="text" value={loggedUser.privateKey} />
            <div className="copy fa-s" onClick={ref}></div>
         </div>
      </>
   )
}
