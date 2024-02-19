'use client'

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { logo_text } from './assets-Imports'
import { menu } from './assets-Imports'
import { SignedIn } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'



const MobileNav = () => {
    const pathname = usePathname();

  return (
    <header className='header'>
        <Link href="/"
        className=' flex item-center gap-2 py-2'
        >
            <Image
            src={logo_text}
            alt='logo'
            width={180}
            height={28}
            />
        </Link>
        <nav className='flex gap-2 '>
            <SignedIn>
                <UserButton afterSignOutUrl='/' />
                {/* sheet From Shadcn */}
                <Sheet>
                  <SheetTrigger>
                    <Image src={menu} alt='menu' width={32} height={32} className='cursor-pointer' />
                  </SheetTrigger>

                  <SheetContent className='sheet-content sm:w-64'>
                    <>
                    <Image src={logo_text} alt="log" width={152} height={23} />

                      {/* Links */}
                    <ul className='header-nav_elements'>
                        {navLinks.map((link) => {
                        const isActive = link.route === pathname

                        return (
                            <li
                            key={link.route}
                            className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                            >
                            <Link className='sidebar-link' href={link.route}>
                                <Image
                                src={link.icon}
                                alt='logo'
                                width={24}
                                height={24}
                                
                                />         
                                {link.label}               
                            </Link>
                            </li>
                        )
                        })}
                        <li className=' flex-center cursor-pointer gap-2 p-4'>
                        <UserButton afterSignOutUrl='/' showName /> 
                        </li>
                    </ul>

                    </>
                  </SheetContent>
                </Sheet>
            </SignedIn>

            <SignedOut>
                <Button asChild className='button bg-purple-gradient bg-cover'>
                    <Link href='/sign-in'>Login</Link>
                </Button>
            </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav
