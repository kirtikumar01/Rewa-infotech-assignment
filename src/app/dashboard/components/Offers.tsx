import React from 'react'
import Image from 'next/image'

const Offers = () => {
  return (
    <div className="bg-[url('/img/offer_page_img.png')] min-h-screen overflow-hidden bg-contain bg-no-repeat bg-center bg-[#f7fbff] flex align-center justify-center">
        <div className='flex align-center justify-center w-full gap-40 px-20'>
            <div className='flex flex-col align-center justify-center gap-5'>
                <div className='flex items-center justify-between'>
                    <div className='text-right'>
                        <h1 className='text-black font-black text-2xl'>VPN Protection</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu. Nunc commodo augue nibh. Cras eget metus risus.</p>
                    </div>
                    <img src="img/plane_img.png" alt="" className='min-w-[100px] h-[100px]' />
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-right'>
                        <h1 className='text-black font-black text-2xl'>Champion & Role Selection</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu. Nunc commodo augue nibh. Cras eget metus risus.</p>
                    </div>
                    <img src="img/plane_img.png" alt="" className='min-w-[100px] h-[100px]' />
                </div>
            </div>
            <div className='flex flex-col align-center gap-5 justify-center'>
                <div className='flex items-center justify-between'>
                    <img src="img/plane_img.png" alt="" className='min-w-[100px] h-[100px]' />
                    <div className='text-left'>
                        <h1 className='text-black font-black text-2xl'>Appear Offline</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu. Nunc commodo augue nibh. Cras eget metus risus.</p>
                    </div>                                
                </div>
                <div className='flex items-center justify-between'>
                    <img src="img/plane_img.png" alt="" className='min-w-[100px] h-[100px]'/> 
                    <div className='text-left'>
                        <h1 className='text-black font-black text-2xl'>Life Chat With Booster</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu. Nunc commodo augue nibh. Cras eget metus risus.</p>
                    </div>                                       
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers