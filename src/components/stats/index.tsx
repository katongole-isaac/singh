import Container from '../common/container'

interface StatProps {
  title: string
  text: string
}
const StatsBanner = () => {
  return (
    <div className=" py-2 lg:py-5">
      <Container>
        <div className="py-16 px-28">
          <div className="text-primary flex flex-wrap gap-4 space-y-4 lg:space-y-0 justify-center md:justify-around ">
            <Stat title="2019" text="Company Establishment" />
            <Stat title="5+" text="Years of Experience" />
            <Stat title="741+" text="Company Establishment" />
            <Stat title="26K" text="Company Establishment" />
          </div>
        </div>
      </Container>
    </div>
  )
}

const Stat: React.FC<StatProps> = ({ text, title }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <span className="text-5xl font-bold"> {title} </span>
      <span className="text-mute text-sm text-center font-medium">{text} </span>
    </div>
  )
}

export default StatsBanner
