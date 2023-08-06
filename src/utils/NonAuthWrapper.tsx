import React, { useEffect } from 'react'
import { useAuthContext } from './context/AuthContext'
import { useRouter } from 'next/navigation'

const NonAuthWrapper = (Component:React.ComponentType) => {

    const wrapper = (props:any) => {
        const{loading, hasToken} = useAuthContext()
        const router = useRouter()
        useEffect(()=>{
            if(loading){
                return
            }
            if(hasToken){
                router.replace("/dashboard")
            }
        },[loading,router,hasToken])
        return (loading ? <p>loading...</p> : !hasToken ?  <Component {...props} /> : <></>)
    }

  return (
    wrapper
  )
}

export default NonAuthWrapper