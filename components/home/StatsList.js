import React, { useState } from "react"

import { DocumentDownloadIcon } from "@heroicons/react/outline"
import Table from "../../shared/components/Table"
import {
  checkIfFlagged,
  NoFilter,
  SelectColumnFilter,
} from "../../shared/utils/tableHelper"

import { getCleanedMfr } from '../../shared/utils/getCleanedMfr'
import { useSelector } from "react-redux"

const StatsList = () => {
  const resets = useSelector((state) => state.resets)

  const columns = React.useMemo(() => [
    {
      Header: "ID",
      accessor: "id",
      Filter: NoFilter,
    },
    {
      Header: "Week",
      accessor: "week",
    },
    {
      Header: "Year",
      accessor: "year",
    },
    {
      Header: "Mfr",
      accessor: "mfr",
      Filter: NoFilter,
      Cell: (v) => (
        <img
          className="h-10 w-10 rounded-full"
          src={`//logo.clearbit.com/${getCleanedMfr(v.value)}.com`}
          alt="manufacturer company logo"
        />
      ),
    },
    {
      Header: "Item",
      accessor: "description",
    },
    {
      Header: "Reduction",
      accessor: "reductionExt",
      Filter: NoFilter,
    },
    {
      Header: "Flagged",
      accessor: "flagged",
      Filter: SelectColumnFilter,
      filter: "equals",
      Cell: (v) => checkIfFlagged(v.value),
    },
  ])

  return (
    <section className="max-w-7xl mx-auto mt-10">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="flex items-center mb-2">
              <h1 className="text-lg leading-6 font-medium text-gray-900 mr-2">
                Reset History
              </h1>
              <button className="items-center">
                <DocumentDownloadIcon className="h-5 w-5 text-indigo-500 hover:text-indigo-900" />
              </button>
            </div>

            <div className="shadow border-b border-200 sm:rounded-lg">
              <Table columns={columns} data={resets} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsList
