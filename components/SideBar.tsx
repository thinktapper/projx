import Card from './Card'
import Image from 'next/image'
import logo from '@/assets/images/logo/vector/isolated-monochrome-black.svg'
import SideBarLink from './SideBarLink'
import Link from 'next/link'
import { signout } from '../actions/signout'

const links = [
  // { label: 'Home', icon: 'Grid', link: '/home' },
  {
    label: 'Calendar',
    icon: 'Calendar',
    link: '/',
  },
  { label: 'Profile', icon: 'User', link: '#' },
  {
    label: 'Settings',
    icon: 'Settings',
    link: '/',
  },
]

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <Link href="/home" className="w-full flex justify-center items-center">
        <Image src={logo} alt="Projx logo" priority className="w-14" />
      </Link>
      {links.map((link, index) => (
        <SideBarLink key={index} link={link} />
      ))}
      <div className="w-full flex justify-center items-center">
        <button
          onClick={() => signout()}
          className="text-sm text-gray-500 hover:text-gray-700">
          Sign out
        </button>
      </div>
    </Card>
  )
}

export default Sidebar
