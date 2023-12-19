"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import ReadMore from './ReadMore'
import { datetime } from '@/lib/TimeFormator'
import AOS from "aos";
import "aos/dist/aos.css";

const Artical = ({ slug, date, title, description ,img}:any) => {

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: false,
        });
    }, []);

    return (
        <article>
            <div className="flex gap-5">

                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd >
                        <div className=' p-1 rounded-md w-[15rem]'>
                        <time className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400" data-aos="fade-right" data-aos-duration="810">{datetime(date)}</time>
                        </div>
                    </dd>
                </dl>

                <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">

                        {/* title  */}
                        <div>
                            
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                <Link
                                    href={`${slug}`}
                                    className="text-gray-900 dark:text-gray-100" data-aos="fade-up" data-aos-duration="800"
                                >
                                    {title}
                                </Link>
                            </h2>
                        </div>

                        <div className="prose max-w-none text-gray-500 dark:text-gray-400" data-aos="fade-up" data-aos-duration="810">
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