import Image from 'next/image'
import Button from '@/components/Button'
import Card from '@/components/Card'
import landingLogo from '@/assets/images/logo/vector/default.svg'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <>
      {/* <Image src={landingLogo} /> */}
      <Card className="px-6 py-8 hover:scale-105 transition-all ease-in-out duration-200">
        <div className="w-full">
          <div className="text-center">
            <h2 className="text-3xl mb-2">Welcome to ProjX</h2>
            <p className="m-8 tex-lg text-black/25">
              ProjX is the ultimate project management tool that helps you
              streamline your projects, tasks and schedules.
            </p>
          </div>
          <div className="flex items-center justify-center align-middle">
            <Link href="/signin">
              <Button size="large">Sign in</Button>
            </Link>
          </div>
        </div>
      </Card>
    </>
  )
}
