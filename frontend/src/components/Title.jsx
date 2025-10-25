import React from 'react'

const Title = ({smallTitle, Title, Desc}) => {
  return (
    <div class="mb-16 text-center">
      <span class="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600">
        {smallTitle}
      </span>
      <h2 class="text-4xl text-center font-bold text-gray-900 py-5">
        {Title}
      </h2>
      <p class="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
        {Desc}
      </p>
    </div>
  )
}

export default Title
