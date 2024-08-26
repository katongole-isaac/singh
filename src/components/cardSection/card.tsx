interface CardProps {
  title: string
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="text-primary py-7 px-10 border rounded-md mt-5 flex gap-3 flex-col shadow-md relative min-w-[22rem] max-w-[22rem]">
      <p className="font-semibold text-xl"> {title} </p>

      <div className="">
        <p className="text-gray-600   leading-relaxed">We provide GeM Portal Registration and Consultancy services to clients across india.</p>
      </div>
      {/* <div className="border border-gray-300 border-t-0 rounded-md  absolute -bottom-2 left-2 right-4 p-2 w-[98%]"></div> */}
    </div>
  )
}
export default Card
