import Button from '../common/button'
import Container from '../common/container'
import Pill from '../common/pill'
import ServiceCard from './card'
import serviceData from './data'

const Services = () => {
  return (
    <div className="py-16  bg-gradient-to-b from-slate-100">
      <Container className="space-y-8">
        <div className="flex flex-wrap justify-center items-center xl:justify-between py-8 px-5 gap-8">
          <div className="space-y-4">
            <div className="flex justify-center lg:justify-start items-center">
              <Pill label="what we do for you" className="text-secondary bg-blue-400/20" />
            </div>

            <h1 className="text-4xl text-center lg:text-left font-bold text-primary"> We can Offer Different Services</h1>
          </div>

          <div className="flex items-center">
            <Button label="see our package plan" className="self-center max-w-max min-w-max" circleStyles="" />
          </div>
        </div>

        {/* service cards */}
        <div className="flex flex-wrap gap-4 w-full justify-center lg:justify-center px-10 lg:px-5 xl:px-2">
          {serviceData.map(({ label, icon, img }) => (
            <ServiceCard key={label} label={label} icon={icon} src={img} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Services
