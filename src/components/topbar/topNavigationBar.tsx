import Container from '../common/container'
import AppMenu from './appMenu'

const TopNavigationBar = () => {
  return (
    <div className="bg-[#fafafa] pb-5">
      <Container>
        <AppMenu />
      </Container>
    </div>
  )
}

export default TopNavigationBar
