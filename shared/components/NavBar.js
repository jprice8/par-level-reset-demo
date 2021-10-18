import React, { Fragment } from "react"
import Link from "next/link"
import { Menu, Transition } from "@headlessui/react"
import { useSelector } from "react-redux"

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Reset", href: "/reset" },
]
const userNavigation = [
  { name: "Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/signOut" },
]

const NavBar = () => {
  const user = useSelector((state) => state.users)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="font-semibold">logo here</h1>
          </div>
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.profilePicture}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    <Link
                      href={item.href}
                    >
                      <a
                        className="block px-4 py-2 text-sm text-gray-700"
                      >{item.name}</a>
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default NavBar
