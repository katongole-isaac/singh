import { FaAngleRight } from 'react-icons/fa'

interface Props {
  label: string
  circleStyles?: string
}
const Button: React.FC<Props & React.HTMLAttributes<HTMLButtonElement>> = ({ label, className, circleStyles, ...props }) => {
  return (
    <button className={`flex gap-5  items-center justify-center rounded-3xl bg-secondary px-6 py-2 relative text-white ${className}`} {...props}>
      <span className="uppercase font-semibold">{label} </span>
      <span className="pl-3"></span>
      <span className={` absolute right-0 p-2 bg-blue-800 rounded-full ${circleStyles}`}>
        <FaAngleRight className="text-2xl " />
      </span>
    </button>
  )
}

export default Button
