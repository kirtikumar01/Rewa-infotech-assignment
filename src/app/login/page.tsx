"use client"
import NonAuthWrapper from "@/utils/NonAuthWrapper"
import { useAuthContext } from "@/utils/context/AuthContext"
import Link from "next/link"
import { FormEventHandler, useContext, useEffect } from "react"

const Login = () => {
    const {setToken} = useAuthContext()
    const submitHandler:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const body:{[key:string]:any} = {}
        formData.forEach((value, key) => {body[key]=value})
        fetch("/api/login",{
            method: "POST",
            body: JSON.stringify(body)
        }).then((res)=> res.json()).then((res)=>{
            if(res.success===false){
                alert(res.message)
                return
            }
            setToken(res.token)
        }).catch((err)=>console.log(err))
    }

    useEffect(()=>{
        document.title = "Insanely Gaming | Login"
      },[])

  return (
    <>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={submitHandler} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don&apos;t have an account yet? <Link href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NonAuthWrapper(Login)