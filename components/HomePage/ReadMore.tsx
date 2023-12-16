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
    className="text-primary-500 hover:text-white transition-all duration-100 ease-in-out"
    aria-label={`Read more: "${title}"`}
  >
    Read more &rarr;
  </Link>
  )
}

export default ReadMore