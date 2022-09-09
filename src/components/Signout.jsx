import React from 'react'
import {auth} from '../firebase'

const style ={
    button: `bg-gray-200 px-4 py-2 hover:scale-105 duration-500 rounded-lg`,
}

const Signout = () => {
    const signOut = () => {
        signOut(auth)
    }
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default Signout