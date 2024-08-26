import { FaUser } from "react-icons/fa";

const Avatar = () => {
  return (
    <div className="rounded-full flex justify-center items-center bg-neutral-400/70 w-10 h-10 overflow-hidden">
      <FaUser className="text-white text-4xl relative top-1" />
    </div>
  )
}

export default Avatar;