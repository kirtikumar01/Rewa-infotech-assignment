import React from 'react'
import Image from 'next/image'

const Highlights = () => {
  return (
    <div className='bg-[#f7fbff] p-20 flex flex-col align-center justify-between'>
        <div className='flex flex-col align-center justify-between mt-5'>
            <div className='flex align-center justify-center'>
                <h2 className='text-black font-black text-4xl'>Highlights</h2>
            </div>
            <div className='flex align-center justify-center mt-5'>
                <p className='text-center'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit condimentum. <br /> Curabitur rutrum est sapien, eget ornare libero tincidunt eu.
                </p>
            </div>
            <div className='flex gap-8 align-center justify-center mt-8'>
                {/* cards */}
                <div className="w-48 rounded overflow-hidden shadow-lg flex flex-col align-center justify-center">
                    <div className='flex align-center justify-center'>
                        <img src="/img/calender.png" height={100} width={100} alt="Sunset in the mountains" />
                    </div>
                    <div className="px-6 py-4">
                        <div>
                            <h3 className='text-[#3d9df2] text-2xl font-black text-center'>7+</h3>
                        </div>
                        <div className='text-center text-sm'>
                            <p>Years</p>
                            <p>on Market</p>
                        </div>
                    </div>
                </div>

                <div className="w-48 rounded overflow-hidden shadow-lg flex flex-col align-center justify-center">
                    <div className='flex align-center justify-center'>
                        <img src="/img/people.png" height={100} width={100} alt="Sunset in the mountains" />
                    </div>
                    <div className="px-6 py-4">
                        <div>
                            <h3 className='text-[#3d9df2] text-2xl font-black text-center'>800+</h3>
                        </div>
                        <div className='text-center text-sm'>
                            <p>Ammount</p>
                            <p>of Boosters</p>
                        </div>
                    </div>
                </div>

                <div className="w-48 rounded overflow-hidden shadow-lg flex flex-col align-center justify-center">
                    <div className='flex align-center justify-center'>
                        <img src="/img/payment.png" height={100} width={100} alt="Sunset in the mountains" />
                    </div>
                    <div className="px-6 py-4">
                        <div>
                            <h3 className='text-[#3d9df2] text-2xl font-black text-center'>200+</h3>
                        </div>
                        <div className='text-center text-sm'>
                            <p>Number of</p>
                            <p>Payment Method</p>
                        </div>
                    </div>
                </div>

                <div className="w-48 rounded overflow-hidden shadow-lg flex flex-col align-center justify-center">
                    <div className='flex align-center justify-center'>
                        <img src="/img/chat.png" height={100} width={100} alt="Sunset in the mountains" />
                    </div>
                    <div className="px-6 py-4">
                        <div>
                            <h3 className='text-[#3d9df2] text-2xl font-black text-center'>24/7</h3>
                        </div>
                        <div className='text-center text-sm'>
                            <p>24/7</p>
                            <p>Live Chat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Highlights