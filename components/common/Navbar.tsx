import React from 'react'
import Link from 'next/link'
import NavLinks from '@/data/NavLinks'
import ThemeSwitch from './ThemeSwitch'

const Navbar = () => {
    return (
        <header>
            <div className="flex items-center justify-between">
                <div>
                    <Link href="/">
                        <div className="flex items-center justify-between">
                            <div className="hidden p-2 text-2xl font-semibold sm:block">
                                Love Babbar
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                    {
                        NavLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                            >
                                {link.title}
                            </Link>
                        ))}

                    <ThemeSwitch />
                </div>
            </div>
        </header>
    )
}

export default Navbar