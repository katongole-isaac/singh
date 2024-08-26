import LogoLight from '@/assets/images/pattern.svg'

const RightSectionCard: React.FC<{ label: string; title: string }> = ({ label, title }) => {
  return (
    <div className=" min-w-60 max-w-72 xl:max-w-max min-h-36 border rounded-lg px-6 py-5 flex gap-5 flex-1">
      <div className="basis-28 flex  border-r border-gray-300 px-8 relative">
        <div className="absolute p-6 left-0 bg-blue-300/30 rounded-full"></div>
        <div className="">
          <img src={LogoLight} className="w-full h-full relative -left-2 scale-150" />
        </div>
      </div>

      <div className="flex items-center flex-col justify-center">
        <p className="text-primary font-bold text-4xl">{title}</p>
        <p className="text-mute font-medium">{label} </p>
      </div>
    </div>
  )
}

export default RightSectionCard
