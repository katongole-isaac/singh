import Rating from './rating'

const TestimonialCard = () => {
  return (
    <div className="rounded-md py-8 px-10 max-w-lg bg-white space-y-4">
      <div className="flex items-center">
        <Rating stars={6} />
      </div>
      <div className="text-mute italic">
        <blockquote className=" lg:w-[90%]">
          "From last many months our organisation was struggling to get our proudcts listed on Gem but with the professional help and in-depth
          knowledge of team (gemsupport in) on subject has helped us sail through. All the best for future endeavours."
        </blockquote>
      </div>
      <div className="px-5">
        <div className="border-l-4 border-secondary rounded-sm px-4 text-mute flex flex-col gap-1">
          <span className="font-semibold text-lg">Jal Hiradiya</span>
          <small className=""> CEO Gerow Agency </small>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
