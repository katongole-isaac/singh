import Pill from '../common/pill'

const PackageTopSection = () => {
  return (
    <div className="space-y-5 px-3">
      <div className="space-y-5">
        <Pill label="Our packages" className="text-blue-700 bg-blue-400/20 mx-auto lg:mx-0 " />
        <h1 className="text-3xl text-center lg:text-left font-bold text-primary"> Join With Us & Start Selling on GeM</h1>
      </div>

      <p className="text-mute text-center lg:text-left px-5 lg:px-2">
        We ease your hassle for a smooth registration and make sure your products catalogue is visible for Government purchase officers.
      </p>
    </div>
  )
}

export default PackageTopSection
