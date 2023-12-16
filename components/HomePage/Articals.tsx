
import Link from 'next/link'
import React from 'react'
import ReadMore from './ReadMore'
import { datetime } from '@/lib/TimeFormator'


const Artical = ({ slug, date, title, description }:any) => {
    return (
        <article>
            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">

                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time>{datetime(date)}</time>
                    </dd>
                </dl>

                <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">

                        {/* title  */}
                        <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                    href={`${slug}`}
                                    className="text-gray-900 dark:text-gray-100"
                                >
                                    {title}
                                </Link>
                            </h2>
                        </div>

                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {description}
                        </div>
                    </div>

                    <div className="text-base font-medium leading-6">
                        <ReadMore slug={slug} title={title} />
                    </div>

                </div>
            </div>
        </article>
    )
}

export default Artical