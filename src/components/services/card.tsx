import { IconType } from 'react-icons'
import SampleImage from '@/assets/images/01.jpg'
import { IoLayersOutline } from 'react-icons/io5'

interface ServiceCardProps {
  icon?: IconType | null
  label: string
  src?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ label, icon, src }) => {
  const DefaultIcon = icon ?? IoLayersOutline
  const img = src ? src.trim() : SampleImage;

  return (
    <div className="border-4 border-white  min-w-72 max-h-80 h-80  max-w-72 lg:flex-1 overflow-hidden relative drop-shadow-xl">
      <img src={img} alt="Sample Image" className="scale-[200%] relative top-0 h-full object-contain" />

      <div className="absolute z-20  w-full h-full top-0 bg-gradient-to-b from-transparent via-40% via-transparent to-80% to-blue-950">
        <div className="h-full flex flex-col justify-end py-5 px-3 gap-2 ">
          <div className="w-12 h-12 bg-gray-500/50 flex justify-center items-center rounded-md">
            <DefaultIcon className="text-4xl text-gray-300" />
          </div>
          <p className="font-bold text-xl text-white">{label}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
