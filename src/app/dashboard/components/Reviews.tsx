import React from 'react'
import Image from 'next/image'

const Reviews = () => {
  return (
    <div className="bg-[url('/img/review_img.png')] min-h-screen overflow-hidden bg-cover bg-no-repeat bg-center bg-[#f7fbff] flex align-center justify-center">
        <div className="flex align-center justify-evenly gap-5 w-2/3">
            <div className='flex align-center justify-center gap-6 flex-col'>
                <div>
                    <h2 className='text-3xl font-black text-white'>See what our <br /> customers think</h2>
                </div>
                <div className='flex align-center justify-center gap-5'>
                    <img src="img/right_tick.png" alt="" />
                    <div>
                        <h3 className='text-[#3d9df2] text-bold text-2xl'>Excellent</h3>
                        <p className='text-[#3d9df2]'>4.85 rating <span className='text-white'>5214 Reviews</span></p>
                    </div>
                </div>
                <div>
                    <div className='bg-gradient-to-r from-red-600 to-orange-500 p-5 rounded-3xl flex align-center justify-center'>
                        <div className='flex align-center align-center gap-2'>
                            <img src="img/review_logo.png" className='w-1/2' alt="" /> <span className='text-2xl text-white'>Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex align-center justify-center gap-3 flex-col flex-col'>
                <div className='flex align-center justify-center gap-2 flex-col bg-[#22313e] p-4 rounded-lg text-white text-sm'>
                    <div className='flex align-center gap-3'>
                        <img src="img/stars.png" alt="" />
                        <p>Anonymous</p>
                        <p className='text-[#43617b]'>Verified</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit <br /> condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu. Nunc commodo augue nibh. Cras eget metus risus.
                        </p>
                    </div>
                    <div className='flex justify-end text-sm'>
                        <p>1 Day Ago</p>
                    </div>
                </div>
                <div className='flex align-center justify-center gap-2 flex-col bg-[#22313e] p-4 rounded-lg text-white text-sm'>
                    <div className='flex align-center gap-3'>
                        <img src="img/stars.png" alt="" />
                        <p>Anonymous</p>
                        <p className='text-[#43617b]'>Verified</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit <br /> condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu. Nunc commodo augue nibh. Cras eget metus risus.
                        </p>
                    </div>
                    <div className='flex justify-end text-sm'>
                        <p>1 Day Ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews