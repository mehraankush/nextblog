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
          <div>Ankush Mehra</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">My Blog</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}