
import { datetime } from '@/lib/TimeFormator'
import PageTitle from './PageTitle'

type BlogPageProps = {
    title:string,
    date:Date,
}

const BlogHeading = ( { title,date }:BlogPageProps) => {
  return (
    <header className="pt-6 xl:pb-6 w-full">
    <div className="space-y-1 text-center">
      <dl className="space-y-10">
        <div>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time>{datetime(date)}</time>
          </dd>
        </div>
      </dl>
      <div>
        <PageTitle>{title}</PageTitle>
      </div>
    </div>
  </header>
  )
}

export default BlogHeading