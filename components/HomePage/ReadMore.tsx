import Link from 'next/link'
import React from 'react'

type ReadmeProps = {
    slug:string,
    title:string
}

const ReadMore = ({ slug,title } :ReadmeProps) => {
  return (
    <Link
    href={`${slug}`}
    className="text-primary-500 hover:text-black/60 dark:hover:text-white/60 transition-all duration-100 ease-in-out" data-aos="fade-right" data-aos-duration="800"
  >
    Read more &rarr;
  </Link>
  )
}

export default ReadMore