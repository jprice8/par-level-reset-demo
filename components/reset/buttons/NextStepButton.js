import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'

const NextStepButton = ({ onNextButton }) => {
	return (
		<button type="button" onClick={onNextButton} className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-500 ease-in-out transform hover:scale-110">
			<ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
		</button>
	)
}

export default NextStepButton
