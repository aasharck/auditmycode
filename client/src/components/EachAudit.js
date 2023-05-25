import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog.tsx"
import { Input } from "./ui/input.tsx"
import { Label } from "./ui/label.tsx"
import { Button } from "./ui/button.tsx"

const EachAudit = () => {
    return (
        <div className='border max-w-screen-md flex justify-between items-center mx-auto rounded-md mt-3 p-4 dark:border-gray-800'>
            <div className='block w-2/3'>
                <h2 className="text-2xl font-bold">Contest Name</h2>
                <p className="text-gray-600 dark:text-gray-400">sdlk alskd klakjsdlka dlkajlkdaj slkd jalkd jalksj dlak sdlka slkdlak sldka jsldjlaksdla sldj laks dlka sjd</p>
            </div>
            <div className='block'>
                <div className='flex text-lg pb-2 text-gray-600 dark:text-gray-400'>Budget: <span className='font-bold pl-2'>200,000 USDC</span></div>
                <div className='flex'>
                    <button className='border text-gray-950 border-gray-950 hover:bg-gray-950 hover:text-white px-4 py-2 rounded-md dark:border-gray-800 dark:text-gray-50 dark:hover:bg-gray-800 mr-2'>Audit Details</button>
                    <Dialog className=''>
                        <DialogTrigger><button className='bg-gray-950 hover:bg-gray-800 text-white px-4 py-2 rounded-md dark:bg-white dark:text-gray-950 dark:hover:bg-slate-100'>Bid</button></DialogTrigger>
                        <DialogContent className='bg-gray-100'>
                            <DialogHeader>
                                <DialogTitle>Bid for this Project?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. Once a bid is placed, you cannot change nor withdraw it
                                </DialogDescription>

                            </DialogHeader>
                            {/* TODO: Add if it's ETH or USDC or any token. */}
                            <div className="flex w-full max-w-lg items-center space-x-2">
                                <Input type="number" id="price" placeholder="Your Price" />
                                <Button className='bg-gray-900 text-white' type="submit">Submit</Button>
                            </div>
                            
                        </DialogContent>
                    </Dialog>
                </div>
            </div>





        </div>
    )
}

export default EachAudit