import SocialIcon from '@/components/social-icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href='/' size={6} />
          <SocialIcon kind="github" href='/' size={6} />
          <SocialIcon kind="facebook" href='/' size={6} />
          <SocialIcon kind="youtube" href='/' size={6} />
          <SocialIcon kind="linkedin"href='/' size={6} />
          <SocialIcon kind="twitter" href='/' size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>Love Babar</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">Code Help</Link>
        </div>
      </div>
    </footer>
  )
}
