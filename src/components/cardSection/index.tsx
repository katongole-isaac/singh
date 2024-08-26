import Container from '../common/container'
import Card from './card'

const Cards = () => {
  return (
    <div className="py-5">
      <Container className="space-y-10 pb-8">
        <div className="flex  justify-center lg:justify-start xl:justify-center flex-wrap lg:flex-nowrap gap-8  pt-5 pb-8 lg:px-1 xl:px-16">
          <Card title="PAN India Coverage" />
          <Card title="Lowest cost in the Market" />
          <Card title="Network & Enterprise" />
        </div>

        <hr className="text-mute border" />
      </Container>
    </div>
  )
}

export default Cards
