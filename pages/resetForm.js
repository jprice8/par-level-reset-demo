import React, { Fragment, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import toast from "react-hot-toast"

import Stepper from '../components/reset/Stepper'
import ParStats from '../components/reset/ParStats'
import AccuracyToggle from '../components/reset/AccuracyToggle'
import ButtonGroup from '../components/reset/ButtonGroup'

const ResetForm = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.users)

  return (
    <section>
      <Stepper />

      <div className="sm:max-w-4xl sm:mx-auto pt-10">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <ParStats />

            <div className="sm:max-w-sm sm:mx-auto">
              <label
                htmlFor="newParLevel"
                className="block text-sm font-medium text-gray-700"
              >
                New Par Level
              </label>
              <select>
                <option></option>
              </select>

              <AccuracyToggle />
            </div>

            <ButtonGroup />
          </form>
        </div>
      </div>
    </section>
  )
}

export default ResetForm
