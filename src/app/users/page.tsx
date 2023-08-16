"use client"
import React, { useEffect, useState } from 'react'

const Users = () => {

  const[allUserData, setAllUserData] = useState<any[]>([])

  const getAllUserData = async () =>{
      fetch("/api/allusers",{
        method: "GET",
      }).then((res)=> res.json()).then((res)=> { 
        if(res.success){
          setAllUserData(res.fileData)
        }else{
          alert(res.message)
        }
       }).catch((err)=>console.log(err))
  }

  useEffect(()=>{
    getAllUserData()
  },[])

  return (
    <div className='p-4'>
      <h1 className='text-center font-bold text-4xl mb-4'>Users List</h1>
      <table className="table-auto w-full">
          <thead className='text-left'>
            <tr className='border'>
              <th scope="col" className='border p-4'>Email</th>
              <th scope="col" className='border'>User Name</th>
              <th scope="col" className='border'>Phone</th>
            </tr>
          </thead>
      {allUserData.map((data)=>{ 
        return (
        
          <tbody className='text-left'>
            <tr className='border'>
              <td className='border p-2'>{data.email}</td>
              <td className='border'>{data.username}</td>
              <td className='border'>{data.phone}</td>
            </tr>
          </tbody>
        )
      })}
      </table>
    </div>
  )
}

export default Users