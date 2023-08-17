import React from 'react'

const ProjectItemCard = () => {
  return (
    <div className='flex flex-row px-3 py-4 w-full h-auto rounded-xl bg-white'>
      <div className='flex flex-col'>
        <p className='font-semibold text-left text-lg font-poppins space-y-2 px-10 mr-4'>Python Installation</p>
        <div>
          <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#000000"
              height="18px" width="18px">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
            </svg><span className='px-2'>20 mins</span>
          </div>
        </div>
      </div>
      <div className='flex items-center mx-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#2E7CF6" className="w-4 h-4" height="16px" width="16px">
          <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z" />
        </svg>
        </div>
        
      </div>
      )
}

      export default ProjectItemCard
