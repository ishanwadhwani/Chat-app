import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../firebase'
const style = {
    wrapper: `flex justify-center`,
}
const googlesignin = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}
const Signin = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googlesignin}/>
    </div>
  )
}

export default Signin