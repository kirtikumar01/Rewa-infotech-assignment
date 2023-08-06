import { useAuthContext } from '@/utils/context/AuthContext'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {

    const {logOut} = useAuthContext()

    const logOutHandler = () => {
        logOut()
    }

  return (
    <>
        <main className="min-h-screen bg-[url('/img/league_of_legends.png')] overflow-hidden bg-black">
          <nav className="border-gray-200 border-b-2 bg-transparent">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="#" className="flex items-center">
                  <img src="img/logo.png" className="h-15 mr-3" alt="Logo" />
              </a>
              <ul className="flex items-center">
              <li className="mr-6">
                <a className="text-white hover:text-white-800" href="#">Boosting</a>
              </li>
              <li className="mr-6">
                <a className="text-white hover:text-white-800" href="#">Account</a>
              </li>
              <li className="mr-6">
                <a className="text-white hover:text-white-800" href="#">Games</a>
              </li>
              <li className="mr-6">
                <a className="text-white hover:text-white-800" href="#">Demo</a>
              </li>
              <li className="mr-6">
                <a className="text-white hover:text-white-800" href="#">FAQ</a>
              </li>
              <li className="mr-6">
                <a className="text-white hover:text-white-800" href="#">Blog</a>
              </li>
              <button onClick={logOutHandler} className="w-20% text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                  Logout
              </button>
            </ul>
            </div>
          </nav>
          <div className="flex align-center justify-between">
              <div className="flex flex-col align-center justify-center -ml-40 mt-20">
                <img src="img/main_left_img.png" alt="" />
              </div>
              <div className="flex flex-col align-center justify-center w-1/3">
                <h2 className="text-white text-3xl font-black">Premium LOL ELO Boost</h2>
                <p className="text-white text-xs text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                <div className="flex align-center justify-center mt-2">
                <button type="button" className=" text-white rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Boosting</button>
                <button className="transparent rounded-2xl relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                  <span className="relative rounded-2xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Accounts
                  </span>
                </button>
                </div>
              </div>
              <div className="flex flex-col align-center justify-center -mr-40 mt-20">
                <img src="img/main_right_img.png" alt="" />
              </div>
          </div> 
          <div className="flex justify-center align-center -mt-20">
            <div className="bg-white p-3 rounded flex items-center justify-between gap-4 shadow-cyan-500/50 shadow-[0px_9px_0px_0px_rgba(109,40,217)]">
              <h2 className="text-2xl font-bold">We are <br/> <span className="text-[#3d9df2]">featured on</span></h2>
              <div>
                <img src="img/epicnpc_logo.png" alt="" />
              </div>
              <div className="">
                <img src="img/kotaku_logo.png" alt="" />
              </div>
              <div className="">
                <img src="img/sythe_logo.png" alt="" />
              </div>
              <div className="">
                <img src="img/gameranx_logo.png" alt="" />
              </div>
            </div>
          </div>
        </main>
    </>
  )
}

export default Navbar