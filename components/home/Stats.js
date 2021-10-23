import React, { useState } from 'react'
import Link from 'next/link'
import { CashIcon, ClockIcon, TrendingDownIcon } from '@heroicons/react/outline'
import { useSelector } from 'react-redux'

import { usdTwoDigits } from '../../shared/utils/currencyHelper'
import { 
  calcExtReduction,
  calcWeeksCompleted,
  calcParsReset
} from '../../shared/utils/dashboardStatsHelper'

const icons = [
  <CashIcon className="h-6 w-6 text-white" aria-hidden="true" />,
  <ClockIcon className="h-6 w-6 text-white" aria-hidden="true" />,
  <TrendingDownIcon className="h-6 w-6 text-white" aria-hidden="true" />,
]

const Stats = () => {
  const pars = useSelector((state) => state.pars)
  const weeks = useSelector((state) => state.weeks)

  const reductionExt = calcExtReduction(pars)
  const weeksCompleted = calcWeeksCompleted(weeks)
  const parsReset = calcParsReset(pars)

  const [metrics, setMetrics] = useState([
    { id: 1, metric: "Inventory Reduced", value: reductionExt },
    { id: 2, metric: "Weeks Completed", value: weeksCompleted },
    { id: 3, metric: "Pars Reduced", value: parsReset },
  ])

  return (
    <section className="lg:max-w-6xl lg:mx-auto pt-3">
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                {icons[item.id - 1]}
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.metric}
              </p>
            </dt>

            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">
                {item.id === 1 && usdTwoDigits(item.value)}
                {item.id > 1 && item.value}
              </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <Link
                    href="/reviewStats"
                  >
                    <a className="font-medium text-indigo-600 hover:text-indigo-400">
                      {" "}
                      View all<span className="sr-only"> {item.metric} </span>
                    </a>
                  </Link>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Stats
