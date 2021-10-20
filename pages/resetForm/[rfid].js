import React, { useState } from "react"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import toast from "react-hot-toast"

import Stepper from "../../components/reset/Stepper"
import ParStats from "../../components/reset/ParStats"
import AccuracyToggle from "../../components/reset/AccuracyToggle"
import ButtonGroup from "../../components/reset/buttons/ButtonGroup"
import AltNavBar from "../../shared/components/AltNavBar"
import { updateNestedItemReset } from "../../shared/redux/parsSlice"
import ResetHistoryCard from "../../components/reset/ResetHistoryCard"

const ResetForm = () => {
  const [newParLevel, setNewParLevel] = useState("")
  const [stepIndex, setStepIndex] = useState(1)

  const dispatch = useDispatch()
  const user = useSelector((state) => state.users)
  const pars = useSelector((state) => state.pars)

  const router = useRouter()
  const { rfid } = router.query

  const currentPar = pars[stepIndex - 1]
  const isUpdate = currentPar?.itemreset.resetLevel ? true : false
  const canSubmit = Boolean(newParLevel)

  console.log()

  const onBackButton = () => {
    setNewParLevel("")
    setStepIndex(stepIndex - 1)
  }

  const onNextButton = () => {
    if (newParLevel) {
      dispatch(
        updateNestedItemReset({
          parId: currentPar.id,
          userFirstName: user.firstName,
          userLastName: user.lastName,
          resetLevel: newParLevel,
          lastUpdated: new Date().toISOString(),
          week: rfid
        })
      )
      // Confirm to user
      toast.success(`Par reset to ${newParLevel}!`)
      // Reset new par input
      setNewParLevel("")
      // Move to next step in form
      setStepIndex(stepIndex + 1)
    } else {
      toast.error("Please set your desired par level before continuing!")
    }
  }

  const onSubmitButton = () => {
    console.log(stepIndex)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <AltNavBar>
      <Stepper stepIndex={stepIndex} />

      <div className="sm:max-w-4xl sm:mx-auto pt-10">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={onFormSubmit}>
            <ParStats stepIndex={stepIndex} par={currentPar} />

            <div className="sm:max-w-sm sm:mx-auto">
              <label
                htmlFor="newParLevel"
                className="block text-sm font-medium text-gray-700"
              >
                New Par Level
              </label>
              <div className="mt-3">
                <input
                  type="number"
                  name="newParLevel"
                  id="newParLevel"
                  className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-600 rounded-md py-2 px-4"
                  placeholder={currentPar.currentParQty}
                  value={newParLevel}
                  onChange={(e) => setNewParLevel(e.target.value)}
                  max={currentPar.currentParQty}
                  min={1}
                  required
                />
              </div>
            </div>

            {isUpdate && <ResetHistoryCard par={currentPar} user={user} />}

            <ButtonGroup
              stepIndex={stepIndex}
              onBackButton={onBackButton}
              onNextButton={onNextButton}
              onSubmitButton={onSubmitButton}
              canSubmit={canSubmit}
            />
          </form>
        </div>
      </div>
    </AltNavBar>
  )
}

export default ResetForm
