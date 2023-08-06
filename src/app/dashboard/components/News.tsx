import React from 'react'
import Image from 'next/image'

const News = () => {
  return (
    <div className='bg-[#fafcff] min-h-screen w-full flex algn-center justify-center flex-col gap-5'>
        <h1 className='text-4xl font-black text-center'>News - Guides - Updates</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit condimentum. <br /> Curabitur rutrum est sapien, eget ornare libero tincidunt eu.</p>
        <div className='flex align-center justify-center gap-5'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-[0px_5px_0px_0px_rgba(0,255,255)] dark:bg-gray-800 dark:border-gray-700">
                {/* <a href="#"> */}
                    <img className="rounded-t-lg w-full" src="/img/news-img-1.png" alt="" />
                {/* </a> */}
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet adipiscing elit.</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-[0px_5px_0px_0px_rgba(0,255,255)] dark:bg-gray-800 dark:border-gray-700">
                {/* <a href="#"> */}
                    <img className="rounded-t-lg w-full" src="/img/news-img-2.png" alt="" />
                {/* </a> */}
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet adipiscing elit.</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow shadow-[0px_5px_0px_0px_rgba(0,255,255)] dark:bg-gray-800 dark:border-gray-700">
                {/* <a href="#"> */}
                    <img className="rounded-t-lg w-full" src="/img/news-img-3.png" alt="" />
                {/* </a> */}
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum dolor sit amet adipiscing elit.</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed euismod suscipit condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News

// Lorem ipsum dolor sit amet adipiscing elit. Sed euismod suscipit condimentum. Curabitur rutrum est sapien, eget ornare libero tincidunt eu.