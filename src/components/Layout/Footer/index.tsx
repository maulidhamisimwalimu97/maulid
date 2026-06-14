import React, { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className='bg-white dark:bg-darkmode border-t border-gray-200 dark:border-dark_border px-6'>
      <div className='text-center py-6'>
        <p className='text-base text-grey dark:text-white/50'>
          © {new Date().getFullYear()} Maulid Mwalimu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
