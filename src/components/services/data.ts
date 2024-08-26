/**
 * Service card data
 *
 */
import { CiUser } from 'react-icons/ci'
import { IoWalletOutline } from 'react-icons/io5'
import { CiCalculator1 } from 'react-icons/ci'

import I10 from '@/assets/images/10.jpg'
import I11 from '@/assets/images/11.jpg'
import I13 from '@/assets/images/13.jpg'

const serviceData = [
  {
    label: 'Gem Registration Consultancy',
    icon: CiUser,
    img: I10,
  },
  {
    label: 'Vendor Assessment Guidance',
    icon: CiCalculator1,
    img: I11,
  },
  {
    label: 'Assistance with Product Management',
    icon: IoWalletOutline,
    img: '',
  },
  {
    label: 'Brand registration & OEM Panel',
    icon: null,
    img: I13,
  },
  {
    label: 'Assistance with Bidding',
    icon: null,
    img: '',
  },
  {
    label: 'MSME Registration',
    icon: null,
    img: I13,
  },
  {
    label: 'ISO Certifications & Trademark',
    icon: null,
    img: I10,
  },
  {
    label: 'Digital Media Services',
    icon: null,
    img: I11,
  },
]

export default serviceData
