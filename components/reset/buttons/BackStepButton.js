import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/outline'

const BackStepButton = ({ onBackButton }) => {
	return (
		<button onClick={onBackButton} type="button" className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-500 ease-in-out transform hover:scale-110">
			<ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
		</button>
	)
}

export default BackStepButton
