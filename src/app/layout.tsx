"use client"
import AuthContextProvider, { useAuthContext } from '@/utils/context/AuthContext'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
// import {useRouter} from 'next/router';

const publicRoutes = ["/login","/register", "/"]

const inter = Inter({ subsets: ['latin'] })


function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  
  return (
      <html lang="en">
        <body className={inter.className}>{ children }</body>
      </html>
  )
}

export default ({children}:{children:React.ReactNode})=> {
  return <AuthContextProvider><RootLayout>{children}</RootLayout></AuthContextProvider>
}