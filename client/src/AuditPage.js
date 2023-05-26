import React from 'react'
import { useParams } from 'react-router-dom';
import { Button } from './components/ui/button.tsx';

const AuditPage = () => {
    const { projectId } = useParams();

    return (
        <div className='text-gray-950 dark:bg-gray-950 dark:text-white pb-10'>
            <div className='max-w-screen-md mx-auto border border-gray-200 p-5 rounded-md mt-20 dark:border-gray-800'>
                <div className='flex flex-wrap items-center justify-between'>
                    <h1 className="text-3xl font-bold">Project Name</h1>
                    <Button className='bg-gray-950 text-white dark:text-gray-950 dark:bg-white'>Bid</Button>
                </div>
                <div className='mt-4'>SLOC:</div>
                <div className=''>Budget</div>
                <div className=''>project desc goes here project desc goes here project desc goes here project desc goes here project desc goes here project desc goes here project desc goes here 
                </div>
            </div>


            
            <div className='max-w-screen-md mx-auto mt-8'>
                <h1 className='text-3xl font-bold border-b pb-1 border-gray-200 dark:border-gray-800'>Bids</h1>
                <div className='border border-gray-200 p-5 rounded-md mt-3 dark:border-gray-800 flex flex-wrap items-center justify-between'>
                    <p>Bid of 20,000 USDC from 0x00000 </p>
                    {/* TODO: Show the button only for owner of the audit/project */}
                    <Button className='bg-gray-950 text-white dark:text-gray-950 dark:bg-white'>Select Auditor</Button>
                </div>
            </div>
        </div>
    )
}

export default AuditPage