import React, { useState } from "react"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import Stepper from "../../components/reset/Stepper"
import ParStats from "../../components/reset/ParStats"
import ButtonGroup from "../../components/reset/buttons/ButtonGroup"
import AltNavBar from "../../shared/components/AltNavBar"
import ResetHistoryCard from "../../components/reset/ResetHistoryCard"
import ErrorModal from "../../shared/components/ErrorModal"
import { updateNestedItemReset } from "../../shared/redux/parsSlice"
import { updateSubmissionStatus } from "../../shared/redux/weeksSlice"
import ClearbitDisclosure from '../../shared/components/ClearbitDisclosure'

const ResetForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const [stepIndex, setStepIndex] = useState(1)

  const dispatch = useDispatch()
  const user = useSelector((state) => state.users)
  const pars = useSelector((state) => state.pars)

  const router = useRouter()
  const { rfid } = router.query

  const currentPar = pars[stepIndex - 1]
  const isUpdate = currentPar?.itemreset.resetLevel ? true : false

  const currentYear = new Date().getFullYear()
  const todaysDate = new Date().toISOString()

  const onBackButton = () => {
    setValue("newParLevel", "")
    setStepIndex(stepIndex - 1)
  }

  // When the form is submitted:
  // 1. Dispatch the update to reset slice
  // 2. Inform the user of success and clear the UI input
  // 3. If not the final step, move to the next step

  const onSubmit = (data) => {
    // Update reset
    dispatch(
      updateNestedItemReset({
        parId: currentPar.id,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        resetLevel: parseInt(data.newParLevel),
        lastUpdated: todaysDate,
        week: parseInt(rfid),
        year: parseInt(currentYear),
      })
    )
    // Update current week's submission status
    dispatch(updateSubmissionStatus({ weekNumber: parseInt(rfid) }))
    // Empty the UI input
    setValue("newParLevel", "")

    // If the final step in form...
    if (stepIndex === 5) {
      // Confirm to user
      toast.success("Week completed, inventory is already looking lighter!")
      setStepIndex(1)
      // Take user back to dashboard
      router.push("/dashboard")
    } else {
      // Confirm to user
      toast.success(`Par reset to ${data.newParLevel}!`)
      // Move to next step in form
      setStepIndex(stepIndex + 1)
    }
  }

  return (
    <AltNavBar>
      <Stepper stepIndex={stepIndex} />

      <div className="sm:max-w-4xl sm:mx-auto pt-20">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-400 rounded-md py-2 px-4"
                  placeholder={currentPar.currentParQty}
                  {...register("newParLevel", {
                    required: true,
                    validate: {
                      minInput: (value) => parseInt(value) > 0,
                      maxInput: (value) =>
                        parseInt(value) <= currentPar.currentParQty,
                    },
                  })}
                />
                {errors.newParLevel &&
                  errors.newParLevel.type === "minInput" && (
                    <ErrorModal
                      errorMessage={"Your input must be a positive integer."}
                    />
                  )}
                {errors.newParLevel &&
                  errors.newParLevel.type === "maxInput" && (
                    <ErrorModal
                      errorMessage={
                        "Your input must be less than your current on hand quantity."
                      }
                    />
                  )}
              </div>
            </div>

            {isUpdate && <ResetHistoryCard par={currentPar} user={user} />}

            <ButtonGroup stepIndex={stepIndex} onBackButton={onBackButton} />
          </form>
        </div>
        <ClearbitDisclosure />
      </div>
    </AltNavBar>
  )
}

export default ResetForm
