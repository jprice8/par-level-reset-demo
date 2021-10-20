import React from 'react'

const steps = [
  { name: "Par 1", stage: 1 },
  { name: "Par 2", stage: 2 },
  { name: "Par 3", stage: 3 },
  { name: "Par 4", stage: 4 },
  { name: "Par 5", stage: 5 },
]

const Stepper = ({ stepIndex }) => {
  return (
    <div className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="py-6 lg:border-t lg:border-gray-200">
          <div className="flex">
            <p className="text-sm font-medium">
              Par {stepIndex} of {steps.length}
            </p>
            
            <ul className="ml-8 flex items-center space-x-5">
              {steps.map((step) => (
                <li key={step.stage}>
                  {step.stage < stepIndex ? (
                    <div className="block w-2.5 h-2.5 bg-indigo-600 rounded-full">
                      <span className="sr-only">{step.name}</span>
                    </div>
                  ) : step.stage === stepIndex ? (
                    <div className="relative flex items-center justify-center">
                      <span 
                        className="absolute w-5 h-5 p-px flex"
                        aria-hidden="true"
                      >
                        <span className="w-full h-full rounded-full bg-indigo-200" />
                      </span>
                      <span className="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" />
                      <span className="sr-only">{step.name}</span>
                    </div>
                  ): (
                    <div className="block w-2.5 h-2.5 bg-indigo-200 rounded-full hover:indigo-400">
                      <span className="sr-only">{step.name}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stepper
