'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import AwakeButton from './AwakeButton'

// ---------------------------------------------------------------------------
// 1. DUMMY DATA & UTILS
// ---------------------------------------------------------------------------
interface NavItem {
  name: string
  href: string
  current: boolean
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/', current: true },
  { name: 'Info', href: '/info', current: true },
]

function classNames(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}

// ---------------------------------------------------------------------------
// 2. AWAKE BUTTON COMPONENT (Included so the file doesn't break)
// ---------------------------------------------------------------------------
interface AwakeButtonProps {
  onStateChange: (state: boolean) => void
}


// ---------------------------------------------------------------------------
// 3. MAIN NAVBAR COMPONENT
// ---------------------------------------------------------------------------
export default function Navbar() {
  const [isAwake, setIsAwake] = useState(false)

  return (
    <Disclosure
      as="nav"
      className="relative bg-gradient-to-b from-gray-900 to-gray-800/90 backdrop-blur-md border-b border-white/10 transition-all duration-500 z-50 w-full"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              
              {/* Mobile menu toggle button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg className="block h-6 w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="block h-6 w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </DisclosureButton>
              </div>

              {/* Desktop Layout */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block w-full">
                  <div className="flex space-x-6 items-center">
                    
                    {/* Awake Button Container */}
                    <div
                      className={classNames(
                        "pointer-events-auto flex items-center justify-center rounded-md px-4 py-2 shadow-lg transition-all duration-500 ease-in-out outline outline-2 outline-offset-2 hover:opacity-90 hover:shadow-xl cursor-pointer",
                        isAwake 
                          ? "bg-gradient-to-r from-green-950 to-emerald-900 outline-green-500/70 shadow-green-900/30" 
                          : "bg-gradient-to-r from-red-950 to-rose-900 outline-red-500/70 shadow-red-900/30"
                      )}
                    >
                      <AwakeButton onStateChange={setIsAwake} />
                    </div>

                    {/* Navigation Links (Using Next.js Link) */}
                    <div className="flex space-x-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={item.current ? 'page' : undefined}
                          className={classNames(
                            item.current 
                              ? 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-white ring-1 ring-white/10 shadow-md' 
                              : 'text-gray-300 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-white hover:shadow-md hover:-translate-y-0.5',
                            'rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-in-out'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <DisclosurePanel className="sm:hidden border-t border-white/10 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-md transition-all duration-500 ease-in-out">
            <div className="space-y-4 px-4 pt-4 pb-6">
              
              {/* Mobile Awake Button */}
              <div className="flex justify-center pb-4 border-b border-white/5">
                <div
                  className={classNames(
                    "pointer-events-auto flex w-full items-center justify-center rounded-md px-4 py-2 shadow-lg transition-all duration-500 ease-in-out outline outline-2 hover:opacity-90",
                    isAwake 
                      ? "bg-gradient-to-r from-green-950 to-emerald-900 outline-green-500/70 shadow-green-900/30" 
                      : "bg-gradient-to-r from-red-950 to-rose-900 outline-red-500/70 shadow-red-900/30"
                  )}
                >
                  <AwakeButton onStateChange={setIsAwake} />
                </div>
              </div>

              {/* Mobile Links */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link} // Render Headless UI button as Next.js Link
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current 
                        ? 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-white border-l-4 border-indigo-400' 
                        : 'text-gray-400 hover:bg-gradient-to-r hover:from-white/10 hover:to-white/5 hover:text-white hover:pl-6 border-l-4 border-transparent',
                      'block rounded-r-md px-4 py-3 text-base font-medium transition-all duration-300 ease-in-out'
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}