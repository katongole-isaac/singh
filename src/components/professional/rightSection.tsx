import { FaArrowRight } from "react-icons/fa"
import Pill from "../common/pill"

const ProfessionalRightSection = () => {
  return (
    <div className="text-slate-500 space-y-4 px-10 lg:px-3 text-center md:text-left">
      <div className="flex justify-center md:justify-normal">
        <Pill label="get to know us" className="text-secondary bg-blue-400/20 " />
      </div>

      <h1 className=" text-2xl  md:text-3xl lg:text-4xl  font-bold text-primary text-center  md:text-left">India's prominent Professional Consultants</h1>

      <div className="font-medium leading-7">
        <p>
          Our dedicated team will help all sorts of companies and startups to enter ad establish their brand in market through supplies to potential
          government buyers. We believe in hand-in-hand approach as we stay with you for full course till you get your desired results on GeM portal.{' '}
          <br />
          We are covering PAN Indian clients of multiple industries carrying different product portfolio. Our consulting services are tailored
          specifically to the needs of our clients and in order to explore pratical growth on digital platform 'GeM'
        </p>
      </div>

      <div className="py-4 flex justify-center md:justify-start">
        <ul className="space-y-5">
          <PointItem label="PAN India Coverage" />
          <PointItem label="Wold-class Team" />
          <PointItem label="Lowest-cost in the Market" />
          <PointItem label="Our Network & Enterprise" />
        </ul>
      </div>

      <p className="font-medium  leading-7">
        We make it our business to look after your smooth registration on GeM with an efficient team and above all we are contactable & responsive and
        most importantly we listen to our clients need.{' '}
      </p>
    </div>
  )
}

export default ProfessionalRightSection

const PointItem: React.FC<{ label: string }> = ({ label }) => {
  return (
    <li className="flex gap-3 items-center ">
      <div className="rounded-full bg-blue-600 p-1">
        <FaArrowRight className="text-lg text-white" />
      </div>
      <span className="font-bold text-primary">{label}</span>
    </li>
  )
}
