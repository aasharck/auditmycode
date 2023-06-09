import React, { useState } from 'react'
import { Input } from "./components/ui/input.tsx"
import { Textarea } from "./components/ui/textarea.tsx"
import { Button } from "./components/ui/button.tsx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select.tsx"
import { ethers } from 'ethers'

// TODO: request audit page
// Details needed
// 1. Name of audit
// 2. small description of audit (1-3 sentences)
// 3. Price of audit
// 4. token address - address(0) if native currency
// 5. SLOC
// No need for extensive info about the project, not audit scopes
const RequestAudit = () => {
  const [name, setName] = useState();
  const [budget, setBudget] = useState()
  const [sloc, setSloc] = useState();
  const [token, setToken] = useState();

  const sendRequest = () => {
    try {
      // const tx = await 
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='text-gray-950 dark:bg-gray-950 dark:text-white pb-10 mt-20'>
      <h1 className='text-4xl text-center'>Request an Audit</h1>
            <div className="max-w-screen-md mx-auto border border-gray-200 p-5 mt-5 rounded-md  dark:border-gray-800  medium-font">
              <div className='flex mb-2 gap-2'>
                <Input className='w-1/2' type="text" placeholder="Name Of Project" onChange={(e) => setName(e.target.value)}/>
                <Input className='w-1/2' type="number" placeholder="Maximum Budget" onChange={(e) => setBudget(e.target.value)}/>
              </div>
              <div className='flex mb-2 gap-2'>
                <Input className='w-1/2 bg' type="text" placeholder="SLOC" onChange={(e) => setSloc(e.target.value)}/>
                <Select onValueChange={(value) => setToken(value)}>
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Token" />
                </SelectTrigger>
                <SelectContent className='bg-white dark:bg-gray-900'>
                  <SelectItem value="0x0000000000000000000000000000000000000000">ETH</SelectItem>
                  <SelectItem value="dark">USDC</SelectItem>
                  <SelectItem value="system">USDT</SelectItem>
                </SelectContent>
              </Select>

              </div>
              <div className="grid w-full gap-2">
                <Textarea placeholder="Enter a description for your project. About 2-3 sentences is enough" />
                <Button className='bg-gray-950 text-white dark:bg-white dark:text-gray-950'>Submit</Button>
              </div>
            </div>
    </div>
  )
}

export default RequestAudit