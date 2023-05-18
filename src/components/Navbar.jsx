// eslint-disable-next-line react/prop-types
export const Navbar = ({ title }) => {
  return (
    <nav className='bg-[#025464]'>
      <div className='mx-auto  px-2 sm:px-6 lg:px-2'>
        <div className='relative flex h-16 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'></div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <span className=' text-white rounded-md  py-2  font-medium text-3xl'>
                  {title}
                </span>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='relative ml-3'></div>
          </div>
        </div>
      </div>

      <div className='sm:hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <a
            href='#'
            className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
            aria-current='page'
          >
            Dashboard
          </a>
          <a
            href='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
          >
            Team
          </a>
          <a
            href='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
          >
            Projects
          </a>
          <a
            href='#'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  )
}
