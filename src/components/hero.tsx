import { PiPhoneCallLight } from 'react-icons/pi'
import Button from './common/button'
import Container from './common/container'

const Hero = () => {
  return (
    <div className="">
      <Container>
        <div className="py-16 px-4 lg:px-20">
          <div className="bg-primary text-white flex flex-wrap lg:flex-nowrap lg:justify-between justify-center gap-5 rounded-md py-10  px-3 lg:px-12 xl:px-20">
            <div className="flex max-w-full gap-2 items-center lg:border-r-2 border-r-secondary pr-7 basis-96 justify-center lg:justify-start">
              <PiPhoneCallLight className="text-5xl text-white" />
              <div className="flex flex-col items-start justify-start">
                <span className=""> Call For More Info</span>
                <span className="font-bold text-xl tracking-wide w-full">+91 90230 64843 </span>
              </div>
            </div>

            <div className=" px-4 flex items-center md:w-[80%] lg:w-[50%] ">
              <p className="font-bold text-2xl text-center">Buy Membership Plan and Get Confirmed Orders From GeM.</p>
            </div>

            <Button className="self-center min-w-max" label="Membership Plan" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
