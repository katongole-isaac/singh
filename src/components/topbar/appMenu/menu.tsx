import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { MdMenu } from 'react-icons/md'
import { PiPhoneCallLight } from 'react-icons/pi'

interface Props {
  ulStyles: string
  moreStyles: string
  wrapperStyles?: string
  onToggle?: () => void
}

const Menu: React.FC<Props> = ({ moreStyles, ulStyles, wrapperStyles, onToggle }) => {
    
  return (
    <div className={wrapperStyles ?? ''}>
      <ul className={ulStyles}>
        <li>Home</li>
        <li>Price</li>
        <li>Membership Plain</li>
        <li>Contact Us</li>
      </ul>

      {/* other */}
      <div className={moreStyles}>
        <div className="flex gap-2 px-5">
          <div className=" self-center rounded-full bg-secondary p-2">
            <PiPhoneCallLight className="text-2xl text-white" />
          </div>
          <div className="flex flex-col  items-center justify-start">
            <span className="text-gray-500 text-sm leading-4"> Help Line Number</span>
            <span className="font-bold text-[16px] tracking-wide">+91 90230 64843 </span>
          </div>
        </div>

        <button
          onClick={onToggle}
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="hidden md:inline-flex  lg:hidden  items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <MenuSearch className="flex md:hidden lg:flex" />
      </div>
     
    </div>
  )
}

interface MenuSearchProps {
  className: string
}
export const MenuSearch = React.forwardRef<HTMLDivElement, MenuSearchProps>(({ className }, ref) => {
  return (
    <div ref={ref} className={className}>
      <div className="px-5  border-l-2 border-gray-300">
        <CiSearch className="text-3xl cursor-pointer" />
      </div>
      <div className="px-5 border-l-2 border-gray-300 ">
        <MdMenu className="text-3xl cursor-pointer" />
      </div>
    </div>
  )
})

export default Menu
