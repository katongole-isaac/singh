import { FaPlay } from 'react-icons/fa'
import Button from '../common/button'
import Pill from '../common/pill'

const LeftSection = () => {
  return (
    <div className="text-slate-500 space-y-8 px-5  lg:px-3">
      <div className="flex justify-center lg:justify-normal">
        <Pill label="India's prominent professional Consultants" className="text-secondary bg-blue-400/20 " />
      </div>

      <h1 className=" text-4xl lg:text-6xl  font-bold text-primary text-center  lg:text-left">Choose us as your GeM Consultants. </h1>

      <div className="font-medium leading-7 text-center lg:text-left lg:w-[85%]">
        <p>
          We are India's prominent Professional Consultants for GeM(Govt. E-Marketplace) functioning with an experienced and passionate team to
          facilitate our clients at very our clients at every step of getting on board GeM.
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-start gap-10">
        <Button label="Our package " className="px-[2rem] self-center" />
        <div className="flex items-center gap-6">
          <button className="p-4  flex items-center justify-center rounded-full bg-white shadow-xl">
            <FaPlay className="text-xl text-secondary" />
          </button>
          <a className="text-primary underline font-medium cursor-pointer"> Watch The Video</a>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
