import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div
    className="relative overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-black">
    <img
        src="/img/footer-img.png"
        alt="footer image"
        className="absolute top-0 left-0 right-0 bottom-0 h-full w-full" />
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-70"> */}
            <div className='flex align-center justify-evenly opacity-100 mt-20 '>
                <div className='flex align-center justify-center flex-col gap-5'>
                    <div>
                        <img src="/img/footer-logo.png" alt="footer logo" />
                    </div>
                    <div className='text-[#546e85] text-xs text-center'>
                        <p>
                            Lorem ipsum dolor sit amet adipiscing elit. Sed <br /> suscipit condimentum. Curabitur rutrum est <br /> sapien, eget ornare libero tincidunt eu. Nunc <br /> commodo augue nibh.
                        </p>
                    </div>
                    <div className='flex align-center justify-between text-white font-bold'>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='flex align-center justify-center gap-10 flex-col text-white'>
                    <div className='flex align-center justify-center gap-10'>
                        <div className='flex flex-col align-center justify-center gap-10'>
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-lg font-bold'>Games We Service</h3>
                                <div>
                                    <p className='text-[#546e85]'>League Of Legends</p>
                                </div>                                
                            </div>
                            <div>
                                <h3 className='text-lg font-bold'>Service We Offer</h3>
                                <div className='text-[#546e85]'>
                                    <p>LOL Boost</p>
                                    <p>LOL Duo Boost</p>
                                    <p>LOL Placement Boost</p>
                                    <p>LOL Win Boosts</p>
                                    <p>LOL Smurf</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div>
                            <h3 className='text-lg font-bold'>Helpful Links</h3>
                                <div className='text-[#546e85]'>
                                    <p>Blog</p>
                                    <p>FAQ</p>
                                    <p>Demo</p>
                                    <p>Jobs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <img src="/img/paypal-logo.png" alt="logo" />
                        <img src="/img/visa-logo.png" alt="logo" />
                        <img src="/img/bitcoin-logo.png" alt="logo" />
                        <img src="/img/mastercard-logo.png" alt="logo" />
                    </div>
                </div>
            </div>   
            <div className="bg-gradient-to-r from-blue-400 to-green-500 p-1 mt-8">
            </div>
            <div className='flex align-center justify-evenly text-[#546e85] mt-5 text-sm'>
                <div>
                All rights reserved <br />
                2020 Copyright © <span className='text-white'>InsanelyGaming</span>
                </div>
                <div>
                    <p>
                        League of Legends is a registered trademark of Riot Games, Inc. We are in <br /> no way affiliated with, associated with or endorsed by Riot Games, Inc.
                    </p>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Footer