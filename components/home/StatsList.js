import React, { useState } from "react"

import { DocumentDownloadIcon } from "@heroicons/react/outline"
import Table from "../../shared/components/Table"
import {
  NoFilter,
} from "../../shared/utils/tableHelper"

import { getCleanedMfr } from '../../shared/utils/getCleanedMfr'
import { useSelector } from "react-redux"
import { getParsForStatList } from "../../shared/utils/dashboardStatsHelper"
import toast from "react-hot-toast"

const StatsList = () => {
  const pars = useSelector((state) => state.pars)
  const statsListData = getParsForStatList(pars)

  const downloadHandler = () => {
    toast.error("Export to spreadsheet function disabled for demo!")
  }

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
              <button
                type="button"
                className="items-center"
                onClick={downloadHandler}
              >
                <DocumentDownloadIcon className="h-5 w-5 text-indigo-500 hover:text-indigo-900" />
              </button>
            </div>

            <div className="shadow border-b border-200 sm:rounded-lg">
              <Table columns={columns} data={statsListData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsList
