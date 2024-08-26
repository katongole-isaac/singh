import Container from '../common/container'
import RequestForm from './form/formInput'

const CallRequest = () => {
  return (
    <div className="bg-primary py-8">
      <Container className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 py-16 text-white  px-5 lg:px-10 space-y-5 lg:space-y-0">
          <div className=" text-center lg:text-left col-span-1 space-y-4 ">
            <p className="text-3xl font-bold">Request a Call Back </p>

            <p> Register On GeM & Start Selling Today.</p>
          </div>

          <div className="col-span-2  px-10 flex justify-center xl:justify-end ">
            <RequestForm />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CallRequest
