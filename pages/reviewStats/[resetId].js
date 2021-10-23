import React from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"

import { getCleanedMfr } from "../../shared/utils/getCleanedMfr"
import { usdTwoDigits } from "../../shared/utils/currencyHelper"
import AltNavBar from "../../shared/components/AltNavBar"
import RowInfo from "../../components/home/RowInfo"
import DetailPanel from "../../components/home/DetailPanel"
import ClearbitDisclosure from "../../shared/components/ClearbitDisclosure"

const StatsDetail = () => {
  const user = useSelector((state) => state.users)
  const pars = useSelector((state) => state.pars)

  const router = useRouter()
  const { resetId } = router.query

  const currentPar = pars.find((p) => p.id === parseInt(resetId))

  const cleanedMfr = getCleanedMfr(currentPar?.mfr)

  const currentExt = currentPar?.currentParQty * currentPar?.unitCost
  const resetExt = currentPar?.itemreset.resetLevel * currentPar?.unitCost
  const reductionExt = currentExt - resetExt

  return (
    <AltNavBar>
      <main className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 md:flex md:items-center md:justify-between md:max-w-5xl lg:px-8">
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="h-24 w-24 rounded-full"
                  src={`//logo.clearbit.com/${cleanedMfr}.com`}
                  alt="Company logo"
                />
                <span
                  className="absolute inset-0 shadow-inner rounded-full"
                  aria-hidden="true"
                ></span>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {currentPar?.description}
              </h1>
              <p className="mt-2 text-xl font-medium text-gray-700">
                {usdTwoDigits(currentPar?.unitCost)} per {currentPar?.uom}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 md:max-w-5xl lg:grid-flow-col-dense">
          <div className="space-y-6">
            <section aria-labelledby="Reset information title">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    Reset Details
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Item details and reset information
                  </p>
                </div>

                <div className="border-t border-gray-200 py-5 divide-y divide-gray-200 px-5">
                  <div>
                    <dl className="divide-y divide-gray-200">
                      <RowInfo label="IMMS No" value={currentPar?.imms} />
                      <RowInfo
                        label="Manufacturer Catalog No"
                        value={currentPar?.mfrCat}
                      />
                      <RowInfo
                        label="Default Unit of Measure"
                        value={`${currentPar?.uom} of ${currentPar?.uomConvFactor}`}
                      />
                      <RowInfo
                        label="Location Name (#ID)"
                        value={`${currentPar?.locationName} (#${currentPar?.locationId})`}
                      />
                      <RowInfo
                        label="Department No"
                        value={currentPar?.departmentNo}
                      />
                      <RowInfo
                        label="Expense Account No"
                        value={currentPar?.expenseAccountNo}
                      />
                    </dl>
                  </div>
                </div>
                {currentPar && (
                  <DetailPanel
                    user={user}
                    reset={currentPar}
                    reductionExt={reductionExt}
                  />
                )}
              </div>
              <ClearbitDisclosure />
            </section>
          </div>
        </div>
      </main>
    </AltNavBar>
  )
}

export default StatsDetail
