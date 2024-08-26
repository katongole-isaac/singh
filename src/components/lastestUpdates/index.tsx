import Container from '../common/container'
import Pill from '../common/pill'
import UpdatesCard from './updateCard'

const LastestUpdates = () => {
  return (
    <div className="py-10 md:pb-16 lg:pb-24 ">
      <Container className="space-y-5">
        <div className="text-center py-6 space-y-5 ">
          <div className="flex justify-center">
            <Pill label="News & blogs " className="bg-blue-400/20 text-secondary" />
          </div>
          <h1 className="text-primary text-3xl md:text-4xl font-bold">Read Our Latest Updates</h1>
        </div>
        <div className="flex flex-wrap gap-10 w-full justify-center px-5">
          <UpdatesCard />
          <UpdatesCard />
          <UpdatesCard />
        </div>
      </Container>
    </div>
  )
}

export default LastestUpdates
