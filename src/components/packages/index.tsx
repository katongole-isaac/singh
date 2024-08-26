import Container from '@/components/common/container'
import PackageTopSection from './topsection'
import PackageCard from './packageCard'
import packages from './data/packageDetails'

const Packages = () => {
  const { business, silver, standard } = packages
  return (
    <div className="py-10 md:py-16">
      <Container>
        <div className="space-y-12">
          <PackageTopSection />

          <div className="flex flex-wrap xl:flex-nowrap gap-8 justify-center px-10">
            <PackageCard name="Silver Package" features={silver.features} price={silver.price} />
            <PackageCard name={standard.name} price={standard.price} isPopular={standard.isPopular} features={standard.features} />
            <PackageCard name={business.name} price={business.price} features={business.features} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Packages
