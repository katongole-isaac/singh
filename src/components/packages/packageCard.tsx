import { MdCheck } from 'react-icons/md'
import Button from '../common/button'

export interface IPackage {
  name: string
  price: number
  isPopular?: boolean
  features: string[]
}

interface Props extends IPackage {}

const PackageCard: React.FC<Props> = ({ features, name, price, isPopular }) => {
  const packagePrice = Intl.NumberFormat('en-IN', {
    currency: 'INR',
    style: 'currency',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(price)

  const Popular = (
    <div className=" absolute -right-14 top-14 py-1 px-4 pl-6 bg-red-500 text-white  font-medium rounded-3xl w-40 ">
      <span>Popular</span>
    </div>
  )

  return (
    <div className=" min-w-[380px]  border rounded-md pb-5 relative overflow-hidden">
      {isPopular ? Popular : null}
      <div className="px-10 border-b py-4 border">
        <div className=" py-6 flex flex-col gap-2 text-primary">
          <span className="text-xl font-semibold">{name} </span>
          <span>
            <span className="font-bold text-3xl">{packagePrice} </span>
            <span className="text-mute/50 font-semibold">/1 years(+ gst)</span>
          </span>
        </div>
      </div>

      <div className="px-10  py-4">
        <ul className="space-y-3">
          {features.map((f) => (
            <ListItem key={f.toString()} name={f} />
          ))}
        </ul>
      </div>

      <div className="py-5 flex justify-center ">
        <Button label="Get started" />
      </div>
    </div>
  )
}

const ListItem: React.FC<{ name: string }> = ({ name }) => {
  return (
    <li className="flex gap-3 items-center">
      <MdCheck className="text-green-600 text-xl" />
      <span className="text-slate-600/70 font-medium"> {name} </span>
    </li>
  )
}

export default PackageCard
