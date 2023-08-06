import React, { useEffect } from 'react'
import { useAuthContext } from './context/AuthContext'
import { useRouter } from 'next/navigation'

const authWrapper = (Component:React.ComponentType) => {

    const Wrapper = (props:any) => {
        const{loading, hasToken} = useAuthContext()
        const router = useRouter()
        useEffect(()=>{
            if(loading){
                return
            }
            if(!hasToken){
                router.replace("/login")
            }
        },[loading,router,hasToken])
        return (loading ? <p>loading...</p> : hasToken ?  <Component {...props} /> : <></>)
    }

  return (
    Wrapper
  )
}

export default authWrapper