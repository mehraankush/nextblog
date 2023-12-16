import Artical from '../HomePage/Articals'

export default function BlogSection({ posts }:any) {
  console.log(posts)
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">

        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            All Blogs
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A blog created with Next.js and Tailwind.css in Markdown
          </p>
        </div>

          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}

            {
              posts.map((post:any) => {
                const { slug } = post
                return (
                  <li key={slug} className="py-12">
                    <Artical {...post} />
                  </li>
                )
              })}
          </ul>
      </div>

    </>
  )
}