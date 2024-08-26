import Pill from '../common/pill'
import RightSectionCard from './card'

const RightSection = () => {
  return (
    <div className="text-slate-500 space-y-4 px-10 lg:px-3">
      <div className="flex justify-center lg:justify-normal">
        <Pill label="company overview" className="text-secondary bg-blue-400/20 " />
      </div>

      <h1 className=" text-3xl lg:text-4xl  font-bold text-primary text-center  lg:text-left">This is the right place</h1>

      <div className="font-medium leading-7 text-center lg:text-left lg:w-4/5">
        <p>
          We are here to easae your hassle for a smooth registration of your company. Our expertise on this new initative of GOI we can certainly help
          companies to get through this process of getting registered on GEM hassle-free
        </p>
      </div>

      {/* cards */}
      <div className="flex justify-center w-full flex-wrap gap-4 lg:gap-8">
        <RightSectionCard title="35+" label="Best Award" />
        <RightSectionCard title="741+" label="Happy Clients" />
      </div>
    </div>
  )
}

export default RightSection
