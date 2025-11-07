import React from 'react'
import Title from '../Alerts/Title'

const Section1 = () => {
  return (
      <section className="w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-7xl py-24 bg-white">
        <Title 
        smallTitle="Features"
        Title="Why Choose Our CS Courses?"
        Desc="Explore interactive lessons, hands-on exercises, and real university-level exams built to help you master every CS subject."
        />
        <div className="flex justify-center items-center gap-x-5 gap-y-12 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 mt-15">
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div
              className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
              <svg className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M4 7h16M4 12h10M4 17h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              MCQ Exercises
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Strengthen your understanding with interactive multiple-choice questions for every topic.
            </p>
          </div>

          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div
              className="bg-red-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-red-600">
              <svg className="stroke-red-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 5.5v19c0 .83.9 1.35 1.63.9L23 17.5c.7-.43.7-1.5 0-1.93L7.63 4.6C6.9 4.15 6 4.68 6 5.5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              Video Explanations
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Get embedded videos to detailed explanations and resources for each chapter and concept.
            </p>
          </div>

          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div
              className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
              <svg className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M12 8v4l3 3M5.5 4h13a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13A1.5 1.5 0 0 1 5.5 4Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              Learn Anytime, Anywhere
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Study at your own pace with lifetime access to all purchased courses and materials.
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div
              className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
              <svg className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M12 2 2 7l10 5 10-5-10-5Zm0 15v5m-6-3h12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              University-Aligned Content
            </h4>
            <p className="text-sm font-normal text-gray-500">
                Courses are based on CS university curriculums, ensuring what you learn truly matches your studies.
            </p>
          </div>
        </div>
      </section>
                            
  )
}

export default Section1


