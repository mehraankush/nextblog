
import Link from 'next/link'
import React from 'react'
import ReadMore from './ReadMore'
import { datetime } from '@/lib/TimeFormator'
import Image from 'next/image'


const Artical = ({ slug, date, title, description ,img}:any) => {
    return (
        <article>
            <div className="flex gap-5">

                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd >
                        <div className='border border-white/80 p-1 rounded-md w-[15rem]'>
                          <Image src={`${img}`} alt='Vlog Image' width={400} height={100} className='rounded-md'/>
                        </div>
                    </dd>
                </dl>

                <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">

                        {/* title  */}
                        <div>
                             <time className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">{datetime(date)}</time>
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