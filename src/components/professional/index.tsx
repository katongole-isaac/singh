import Container from '../common/container'
import ProfessionalRightSection from './rightSection'
import SassImage from '@/assets/images/saas-bg-2.png'

const Professional = () => {
  return (
    <div className="relative  ">
      {/* <div className="absolute before:content-[''] before:absolute before:bordser before:border-red-500 before:h-[830px] before:w-[600px] before:bg-updates- before:bg-cover before:bg-no-repeat  before:bg-[-20%_-4em] before:bg-gradient-to-tr before:from-slate-100/50"></div> */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2  py-5 md:py-10 lg:py-14">
          <div className="col-span-1">
            {/* missing image */}
            <img src={SassImage} alt="image_1" className="lg:scale-125 w-full h-full object-contain" />
          </div>
          <div className="col-span-1">
            <ProfessionalRightSection />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Professional
