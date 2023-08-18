import React from 'react'
import PremiumBadge from './PremiumBadge'
import pythonImg from '../Images/python.png'


function DomainCard() {
  return (
    <div className='flex flex-col px-3 py-4 w-[117px] rounded-xl md:w-[150px] md:py-6 bg-white justify-center items-center font-poppins'>
      <img className='w-2/3 h-auto mx-auto' src={pythonImg} alt='Python Logo' />
      <p className=' mt-4 text-center font-bold text-sm'>Python</p>
      <p className='text-center text-[#646464] text-xs'>10+ Projects</p>
    </div>
  );
}

export default DomainCard