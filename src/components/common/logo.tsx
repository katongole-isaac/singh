import CompanyLogo from '@/assets/images/logo.svg'

const Logo = () => {
  return (
    <div className="">
      <img src={CompanyLogo} alt="Logo" className="w-32 md:w-20 lg:w-32 h-auto object-contain " />
    </div>
  )
}

export default Logo
