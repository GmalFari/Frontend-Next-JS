"use state"
import React from 'react'
import { Wallet,MailMinus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BtnsNextBack from './btns-next-back'
import { inter } from '@/app/fonts'
import { cn } from '@/lib/utils'
interface EmailWalletbuttonProps {
  className?:string,
  isEmail?:boolean
}

const EmailWalletbutton:React.FC<EmailWalletbuttonProps> = ({
  className
}) => {
  return (
    <>
      <div className={cn('flex justify-center gap-4',className)}>
      <Button 
      variant={"outline"}
      style={{
      }}
      className='animate__animated animate__fadeIn flex transition-all duration-300 ease-in-out focus:scale-105 justify-center border-2 py-10 flex-col h-auto max-w-[50%]'
      >
      <MailMinus className="w-6 h-6  text-secondary-color-theme my-2" />
      <h2 className='text-secondary-color-theme inline-flex mb-2
       text-[1rem] tracking-tight font-mono font-semibold text'
       
       >
        <span style={{'wordSpacing':"-4px"}}>Link Your Email account</span>
         </h2>
      <p className=' text-gray-400
       tracking-tight text-[0.60rem] leading-tight '
        style={{ }}>
          <span style={{'wordSpacing':"0.3px"}}>
          Helps in Signing In <br/>
        Incase you forgot your Password
          </span>
        </p>

      </Button>
      <Button 
      variant={"outline"}
      className='animate__animated animate__fadeIn flex justify-center border-2 flex-col h-auto max-w-[50%]'
      >
      <Wallet className="w-6 h-6 text-secondary-color-theme my-2" />
      <h2 className='text-secondary-color-theme inline-flex mb-2
       text-[1rem] tracking-tight font-mono font-semibold text'
       
       >
        <span style={{'wordSpacing':"-4px"}}>Connect Wallet</span>
         </h2>
      <p className=' text-gray-400
       tracking-tight text-[0.60rem] leading-tight '
        style={{ }}>
          <span style={{'wordSpacing':"0.3px"}}>
          To Purchase  Your Account  <br/>
          will only be verified after you Link <br/>
           your Wallet Incase you forgot your Password
          </span>
        </p>

      </Button>
      </div>
      <BtnsNextBack nextText={'next'} backText={"back "}  />

    </>
  )
}

export default EmailWalletbutton
