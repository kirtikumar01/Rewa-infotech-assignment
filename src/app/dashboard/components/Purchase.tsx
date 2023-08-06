import React from 'react'
import Image from 'next/image'

const Purchase = () => {
  return (
    <div className="bg-[url('/img/new-img.png')] min-h-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black flex">
        <div className='flex -ml-72'>
            <img className='z-10' src="/img/purchase_hero_img.png" alt="" />
            <img className='-ml-56 h-2/3 w-1/2' src="/img/play_img.png" alt="" />
        </div>
        <div className='flex flex-col align-center gap-5 pt-10 -ml-20 text-white'>
            <p>How to Purchase and What to Expect</p>
            <h2 className='text-3xl font-black'>How to Purchase a Boost</h2>
            <div className="w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <div className="flex h-full w-full items-center bg-gray-800 back p-2 gap-3">
                    <h1 className='text-4xl font-black text-white text-center'>1</h1>
                    <h1 className="text-xl text-white text-center"> Select your type of boost</h1>
                </div>
            </div>
            <div className=" w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <div className="flex h-full w-full items-center from-red-500 to-orange-400 back p-2 gap-3">
                    <h1 className='text-4xl font-black text-white text-center'>2</h1>
                    <h1 className="text-xl text-white text-center"> Select to either continue as a guest or as a <br /> registered user </h1>
                </div>
            </div>
            <div className=" w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <div className="flex h-full w-full items-center bg-gray-800 back p-2 gap-3">
                    <h1 className='text-4xl font-black text-white text-center'>3</h1>
                    <h1 className="text-xl text-white text-center"> Select from one of our many payment <br /> options</h1>
                </div>
            </div>
            <div className=" w-full rounded-md to-yellow-500 p-1">
                <div className="flex h-full rounded-md w-full items-center bg-gray-800 back p-2 gap-3">
                    <h1 className='text-4xl font-black text-white text-center'>4</h1>
                    <h1 className="text-xl text-white text-center"> You&apos;ll then be redirected to the member&apos;s <br /> area to track your order and interact with <br /> the booster</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Purchase