import React from 'react'
import NewUser from '../../components/serverDashboard\'/NewUser'
import Graphs from '../../components/serverDashboard\'/Graphs'

const ServerDashboard : React.FC = () => {
  return (
    <div className='container pt-[20px] flex flex-col justify-start items-start gap-6 mx-auto max-w-[90%] w-full'>
      
      <h2 className='text-2xl '>Secret Agent Consulting</h2>
      <NewUser />
      <Graphs />
      
      </div>
  )
}

export default ServerDashboard