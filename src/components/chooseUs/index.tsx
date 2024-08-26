import Container from '../common/container'
import LeftSection from './section'
import SassImage from '@/assets/images/saas-bg-2.png'

const ChooseUs = () => {
  return (
    <div className="bg-[#fafafa] py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1">
            <LeftSection />
          </div>
          <div className="col-span-1 flex justify-center px-4 xl:px-1">
            <img src={SassImage} className=" lg:scale-105 xl:scale-125" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ChooseUs
