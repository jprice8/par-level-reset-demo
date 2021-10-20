import React from "react"

import { getCleanedMfr } from "../../shared/utils/getCleanedMfr"
import { usdTwoDigits } from "../../shared/utils/currencyHelper"

const ParStats = ({ step, par }) => {
  const cleanedMfr = getCleanedMfr(par?.mfr)
  return (
    <React.Fragment>
      {/* Card Header */}
      <div className="flex">
        <img
          className="h-28 w-28 rounded-full shadow-md"
          src={`//logo.clearbit.com/${cleanedMfr}.com`}
          alt="Manufacturer logo"
        />

        <div className="flex-auto ml-5">
          <h2 className="border-b pb-4 border-gray-200 text-2xl leading-6 font-medium text-gray-900">
            {par?.description}
          </h2>

          <h5 className="text-4xl my-4">
            {usdTwoDigits(par?.unitCost)}{" "}
            <span className="font-light text-sm">per LUOM</span>
          </h5>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-gray-700 font-light mb-2">
          {par?.locationName} | Location ID #{par?.locationId}
        </p>
        <p className="text-gray-700 font-light">
          IMMS # {par?.imms} | Catalog # {par?.mfrCat} | UOM{" "}
          {par?.uomConvFactor} {par?.uom}
        </p>
      </div>

      {/* Info Cards */}
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Current Par Level
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {par?.currentParQty}
            </dd>
          </div>

          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Optimal Par Level
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {par?.recommendedParQty}
            </dd>
          </div>

          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Reduction Qty
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {par?.qtyDelta}
            </dd>
          </div>

          <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              Ext Savings
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {usdTwoDigits(par?.extDelta)}
            </dd>
          </div>
        </dl>
      </div>
    </React.Fragment>
  )
}

export default ParStats
