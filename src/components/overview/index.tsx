import Container from '../common/container'
import RightSection from './rightSection'
import SassImage from '@/assets/images/saas-bg-2.png'

const CompanyOverview = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1">
            <img src={SassImage} alt="image_1" className="lg:scale-110 w-full h-full object-contain" />
          </div>
          <div className="col-span-1">
            <RightSection />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CompanyOverview
