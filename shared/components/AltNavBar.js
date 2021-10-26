import React, { Fragment } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { useSelector } from "react-redux"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { classNames } from "../utils/classNames"

import Header from "./Header"

const navigation = [
  { name: "Dashboard", href: "/", pageName: "dashboard" },
  { name: "Reset", href: "/reset", pageName: "reset" },
]
const userNavigation = [
  { name: "Your Profile", href: "/profile", pageName: "profile" },
  { name: "Settings", href: "/settings", pageName: "settings" },
  { name: "Sign out", href: "/signout", pageName: "signOut" },
]

const AltNavBar = ({ children }) => {
  const user = useSelector((state) => state.users)

  const router = useRouter()

  // Function for checking whether the nav item is
  // currently selected.
  const isCurrent = (item) => {
    return router.pathname === item.href
  }

  return (
    <Fragment>
      <Header />
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 mt-4">
                  <Image
                    src="/favicon.svg"
                    width={90}
                    height={90}
                    alt="Website logo"
                    className=""
                  />
                </div>

                <div className="">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            isCurrent(item)
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={isCurrent(item) ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.profilePicture}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            <Link href={item.href}>
                              <a
                                className={classNames(
                                  isCurrent(item) ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
                                )}
                                aria-current={
                                  isCurrent(item) ? "page" : undefined
                                }
                              >
                                {item.name}
                              </a>
                            </Link>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {children}
      </div>
    </Fragment>
  )
}

export default AltNavBar
