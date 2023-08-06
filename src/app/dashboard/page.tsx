"use client"
import Footer from "@/app/dashboard/components/Footer"
import Highlights from "@/app/dashboard/components/Highlights"
import Navbar from "@/app/dashboard/components/Navbar"
import News from "@/app/dashboard/components/News"
import Offers from "@/app/dashboard/components/Offers"
import Purchase from "@/app/dashboard/components/Purchase"
import Reviews from "@/app/dashboard/components/Reviews"
import authWrapper from "@/utils/AuthWrapper"
import { useAuthContext } from "@/utils/context/AuthContext"
import { useEffect } from "react"

const Dashboard = () => {

  useEffect(()=>{
    document.title = "Insanely Gaming | Dashboard"
  },[])

  return (
    <>
       <Navbar />
       <Highlights />
       <Offers />
       <Reviews />
       <Purchase />
       <News />
       <Footer />
    </>
  )
}

export default authWrapper(Dashboard)