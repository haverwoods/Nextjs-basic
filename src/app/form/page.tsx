import React from 'react'
import { routes } from '../utils/routes'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Form = () => {
  return (
    <div>
         <div className=" flex flex-col gap-4 h-screen ml-10 ">
      <Link href={routes.HOME} >
       <Button className="cursor-pointer"> go back to home page </Button>
        </Link>
        </div>
    </div>
  )
}

export default Form