import Logo from '@/components/common/logo'
import { useRef } from 'react'
import Menu, { MenuSearch } from './menu'
import useMediaQuery from '@/hooks/useMediaQuery'

const AppBarNav = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuSearchRef = useRef<HTMLDivElement>(null)

  const isMediumScreenOnly = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')

  const handleToggle = () => {
    mobileMenuRef.current?.classList.toggle('hidden')
  }

  const showOnSearch = () => {
    menuSearchRef.current?.classList.add('flex')
    menuSearchRef.current?.classList.toggle('hidden')
  }

  return (
    <nav className=" py-3 drop-shadow-xl bg-white">
      <div className="flex-1 flex items-center justify-between gap-4 px-5">
        {/* Logo */}
        <div className="">
          <Logo />
        </div>

        <button
          onClick={handleToggle}
          data-collapse-toggle="navbar-multi-level"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div id="navbar-default" className="hidden flex-1 md:flex items-center justify-between gap-4">
          <Menu
            ulStyles="ml-8 flex gap-5 text-primary font-medium  [&>li]:cursor-pointer"
            moreStyles="flex items-center p-0 text-primary"
            wrapperStyles="flex-1 flex justify-between items-center"
            onToggle={showOnSearch}
          />
        </div>
      </div>
      {/* mobile menu */}
      <div ref={mobileMenuRef} id="mobile-menu" className="md:hidden hidden flex-1">
        <Menu
          ulStyles="px-5 text-primary space-y-2 mb-4 py-4 [&>li]:cursor-pointer hover:[&>li]:text-secondary font-medium [&>li]:max-w-max"
          moreStyles="flex justify-center items-center py-3 text-primary"
        />
      </div>
      {isMediumScreenOnly && <MenuSearch ref={menuSearchRef} className="hidden lg:hidden justify-center" />}
    </nav>
  )
}

export default AppBarNav
