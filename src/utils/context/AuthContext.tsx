"use client"
import { ReactNode, useContext, useEffect, useMemo, useState } from "react"
import { createContext } from "react"

interface AuthContextInterface{
    setToken:(token:string)=>void,
    hasToken:boolean,
    token:string|undefined,
    logOut:()=> void,
    loading:boolean
}

const AuthContext = createContext({} as AuthContextInterface)
export const useAuthContext = () => useContext(AuthContext)

interface AuthContextProviderProps{
    children:ReactNode
}

const AuthContextProvider = (props:AuthContextProviderProps) => {

    const[token, setToken] = useState<string>()
    const[loading, setLoading] = useState(true)
    const hasToken = useMemo(()=>{
        return !!token
    },[token])
    const logOut = () => {
        setToken(undefined)
        localStorage.removeItem("token")
    }

    useEffect(()=>{
        if(token){
            localStorage.setItem("token", token)
        }
    },[token])

    useEffect(()=>{
        try{
            const localToken = localStorage.getItem("token")
            if(localToken){
                setToken(localToken)
            }
        }catch(err){
            console.log(err)
        }
        setLoading(false)
    },[])

  return (
    <AuthContext.Provider value={{token, setToken, hasToken, logOut, loading}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider