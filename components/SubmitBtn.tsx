'react-dom'
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';
//Email
import { useFormStatus } from 'react-dom';



export const SubmitBtn = ({ text } : any) => {

  const { pending } = useFormStatus()

  return (
    <button type='submit' className=' btnDarkStyle group h-[3rem] w-fit btnAnimation
    disabled:scale-100 disabled:bg-opacity-75
    dark:bg-white/10 dark:hover:bg-white/50 dark:hover:text-gray-950'
      disabled={pending}
    >
      {
        pending ?
          (
            <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
          )
          :
          (
            <>
              {text}
              < FaPaperPlane className='transition-all group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:scale-50 ' />
            </>
          )
      }

    </button>
  )
}
