import { FaRegCalendar } from 'react-icons/fa'
import Avatar from './avatar'

const UpdatesCard = () => {
  return (
    <div className="max-w-[360px] px-8 py-5 border rounded-md space-y-4 shadow-sm ">
      <p className="font-bold text-xl text-primary">MSE Purchase Preference in GeM Portal </p>

      <p className="text-mute">The Government e-Marketplace (GeM) stands as a transformative platform, revolutionizing government procurement</p>

      <div className="flex gap-3 text-mute items-center">
        <Avatar />
        <span> GeM Master Consultancy</span>
      </div>

      <div className="flex gap-3 text-mute">
        <FaRegCalendar className="text-2xl text-secondary" />
        <span> August 6, 2024 </span>
      </div>
    </div>
  )
}

export default UpdatesCard
