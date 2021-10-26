import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 h-screen">
      {children}
    </div>
  )
}

export default Layout
