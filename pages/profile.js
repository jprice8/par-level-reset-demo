import React from 'react'
import { useSelector } from 'react-redux'
import AltNavBar from '../shared/components/AltNavBar'
import NavBar from '../shared/components/NavBar'

const Profile = () => {
  const user = useSelector((state) => state.users)

  return (
    <AltNavBar>
      <section>
        <div>
          <img 
            className="h-32 w-full object-cover lg:h-48"
            src="https://source.unsplash.com/1700x200/daily?nature"
            alt=""
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img 
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={user.profilePicture}
                alt="profile-picture"
              />
            </div>
            <div className="">
              <div>
                <h1>
                  {user.firstName} {user.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AltNavBar>
  )
}

export default Profile
