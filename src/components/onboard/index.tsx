import { FaPlay } from 'react-icons/fa'
import Container from '../common/container'

const OnBoard = () => {
  return (
    <div className="bg-onboard relative  text-white  ">
      <div className="backdrop-blur-sm bg-blue-950/50">
        <Container className="">
          <div className="py-20 space-y-10  px-3  md:px-5  ">
            <div className="flex flex-col gap-5 mb-3 text-center md:text-left">
              <h2 className="text-3xl font-bold "> Get on Board GeM Portal </h2>
              <p>
                GeM eliminates human interface in vendor registration, order placement and payment processing, to a great extent. Being an open
                platform, GeM offers no entry barriers to bonafide suppliers who wish to do business with the Government.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <button className="p-5 flex items-center justify-center rounded-full bg-secondary">
                <FaPlay className="text-xl text-white" />
              </button>
              <span>Watch Video</span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default OnBoard
