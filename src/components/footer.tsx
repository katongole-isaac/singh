import Container from './common/container'

const AppFooter = () => {
  return (
    <div className="py-6 pt-10 relative">
      <Container>
        <p className="text-mute text-xs md:text-base text-center font-medium">
          Copyright &copy; {new Date().getFullYear()} GeM Master Consultancy | Manage by Vellaxy.co
        </p>
      </Container>
    </div>
  )
}

export default AppFooter
