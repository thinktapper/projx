import Card from './Card'
import Image from 'next/image'
import logo from '@/assets/images/logo/vector/isolated-monochrome-black.svg'
import SideBarLink from './SideBarLink'
import Link from 'next/link'

const links = [
  // { label: 'Home', icon: 'Grid', link: '/home' },
  {
    label: 'Calendar',
    icon: 'Calendar',
    link: '#',
  },
  { label: 'Profile', icon: 'User', link: '#' },
  {
    label: 'Settings',
    icon: 'Settings',
    link: '#',
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
    </Card>
  )
}

export default Sidebar
