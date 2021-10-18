import React from 'react'

const Panel = ({ children }) => {
  return (
    <section className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Panel
