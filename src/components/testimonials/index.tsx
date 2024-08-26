import Pill from '../common/pill'
import TestimonialCard from './card'

const Testimonials = () => {
  return (
    <div className="bg-primary py-10 pb-20 space-y-7">
      <div className="text-center py-5 space-y-4">
        <div className="flex w-full justify-center">
          <Pill label="our testimonals" className="bg-cyan-700/30 text-white" />
        </div>

        <h1 className="text-white font-bold mx-auto text-4xl xl:w-[50%] md:w-[70%] 2xl:w-[40%]  px-4 md:px-2">
          What Customers Say About Our GeM  Consultancy Services{' '}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-5 lg:px-2">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  )
}

export default Testimonials
