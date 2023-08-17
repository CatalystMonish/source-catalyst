import React from 'react'
import PremiumBadge from './PremiumBadge'
import pythonImg from '../Images/python.jpg'


function DomainCard() {
  return (
    <div className='flex flex-col px-3 py-4 w-117 h-142 rounded-xl shadow-md m-3 space-y-1 bg-white justify-center items-center'>
      <img className='w-2/3 h-auto mx-auto' src={pythonImg} alt='Python Logo' />
      <p className='text-center font-medium text-xs'>Python</p>
      <p className='text-center text-[#646464] text-xs'>10+ Projects</p>
    </div>
  );
}

export default DomainCard