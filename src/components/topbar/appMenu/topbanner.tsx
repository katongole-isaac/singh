import { SlLocationPin } from 'react-icons/sl'
import { TfiEmail } from 'react-icons/tfi'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import { VscBriefcase } from 'react-icons/vsc'

const TopBanner = () => {
  return (
    <div className="flex flex-wrap  justify-between bg-primary text-white">
      {/* first side */}
      <div className="flex flex-wrap-reverse justify-center items-center py-3 gap-3">
        <div className="flex items-center gap-3 px-3">
          <SlLocationPin className="text-xl cursor-pointer" />
          <span> E-709, Ganesh Glory 11, Jagatpur, Ahmedabad </span>
        </div>
        <div className="flex items-center gap-3 px-3 lg:border-l-2">
          <TfiEmail className="text-xl cursor-pointer" />
          <span>
            <a href="">support@genmaster.in</a>
          </span>
        </div>
      </div>

      {/* second side */}
      <div className=" border-red-500 bordesr flex-1 lg:flex-initial flex items-center gap-3 ">
        <div className="flex flex-1  lg:flex-initial justify-center items-center gap-3">
          <FaFacebookF className="text-xl cursor-pointer" />
          <FaInstagram className="text-xl cursor-pointer" />
        </div>
        <div className=" self-stretch flex-1 lg:flex-initial justify-center flex gap-3 px-3 items-center bg-secondary py-2 lg:py-0">
          <VscBriefcase className="text-xl cursor-pointer" />
          <span className="font-bold text-center uppercase"> join membership</span>
        </div>
      </div>
    </div>
  )
}

export default TopBanner
