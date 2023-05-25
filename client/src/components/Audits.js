import React from 'react'
import EachAudit from './EachAudit'

const Audits = () => {
  return (
    <div className='text-gray-950 dark:bg-gray-950 dark:text-white pb-10'>
    <div className='max-w-screen-md  flex flex-wrap items-center mx-auto justify-between border-b-2 border-gray-200 pb-2 pt-20 dark:border-gray-800'>
        <div className='text-3xl font-bold'>
            Active Audits
        </div>
        <div className=''>
            <button className='bg-gray-950 hover:bg-gray-800 text-white px-4 py-2 rounded-md dark:bg-white dark:text-gray-950 dark:hover:bg-slate-100'>Request Audit</button>
        </div>
    </div>
    <EachAudit />
    <EachAudit />
    <EachAudit />
    <EachAudit />
    <EachAudit />
    <EachAudit />
    </div>
  )
}

export default Audits