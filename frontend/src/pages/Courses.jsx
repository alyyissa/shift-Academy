import React from 'react'
import Title from '../components/Title'

const Courses = () => {
  return (
    <div className='px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16 flex flex-col items-center py-10'>
        <Title 
        Title="Prepare, Practice, and Excel in Your Studies"
        Desc="Access tailored exercises, quizzes, and tests to help you strengthen your understanding before or during the semester. Practice smarter and stay ready for every exam"
        />
        <div className='flex flex-col md:flex-row gap-5 md:gap-20 my-10  items-center w-full justify-center'>
            <div className="flex justify-center">
                <div className="flex items-center bg-white p-1 border border-gray-500/50 text-sm w-auto rounded-full">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="options"
                            id="all"
                            className="hidden peer"
                            defaultChecked
                        />
                        <label
                            htmlFor="all"
                            className="cursor-pointer rounded-full py-2 px-4 md:px-7 text-gray-500 transition-colors duration-200 peer-checked:bg-coprimary peer-checked:text-white"
                        >
                            All Courses
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="options"
                            id="html"
                            className="hidden peer"
                        />
                        <label
                            htmlFor="html"
                            className="cursor-pointer rounded-full py-2 px-4 md:px-7 text-gray-500 transition-colors duration-200 peer-checked:bg-coprimary peer-checked:text-white"
                        >
                            Major
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="options"
                            id="css"
                            className="hidden peer"
                        />
                        <label
                            htmlFor="css"
                            className="cursor-pointer rounded-full py-2 px-4 md:px-7 text-gray-500 transition-colors duration-200 peer-checked:bg-coprimary peer-checked:text-white"
                        >
                            Maths
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="options"
                            id="react"
                            className="hidden peer"
                        />
                        <label
                            htmlFor="react"
                            className="cursor-pointer rounded-full py-2 px-4 md:px-7 text-gray-500 transition-colors duration-200 peer-checked:bg-coprimary peer-checked:text-white"
                        >
                            Elective
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex items-center border pl-4 gap-2 bg-white border-gray-500/30 h-[46px] rounded-full overflow-hidden max-w-md w-[322px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#6B7280">
                        <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
                    </svg>
                    <input type="text" className="w-full h-full outline-none text-sm text-gray-500 placeholder:text-slate-400" placeholder='OOP, Data Structure...'/>
                    <button type="submit" className="bg-coprimary w-32 h-9 rounded-full text-sm text-white mr-[5px]">Search</button>
            </div>
        </div>
        <div className='flex flex-wrap justify-between mb-10 gap-7'>
            <div className="flex flex-col bg-white shadow-lg rounded-md w-full sm:w-72">
                <img className='w-full sm:w-72 h-48 object-cover rounded-md'
                    src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
                    alt="image" />
                <div className="p-4 text-sm">
                    <p className="text-slate-600">$ 29.00</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">Chris Jordan</p>
                    <p className="text-slate-500">Looks amazing out of the box. I barely had to customize anything.</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button className="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white shadow-lg rounded-md w-full sm:w-72">
                <img className='w-full sm:w-72 h-48 object-cover rounded-md'
                    src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
                    alt="image" />
                <div className="p-4 text-sm">
                    <p className="text-slate-600">$ 29.00</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">Chris Jordan</p>
                    <p className="text-slate-500">Looks amazing out of the box. I barely had to customize anything.</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button className="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white shadow-lg rounded-md w-full sm:w-72">
                <img className='w-full sm:w-72 h-48 object-cover rounded-md'
                    src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
                    alt="image" />
                <div className="p-4 text-sm">
                    <p className="text-slate-600">$ 29.00</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">Chris Jordan</p>
                    <p className="text-slate-500">Looks amazing out of the box. I barely had to customize anything.</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button className="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white shadow-lg rounded-md w-full sm:w-72">
                <img className='w-full sm:w-72 h-48 object-cover rounded-md'
                    src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
                    alt="image" />
                <div className="p-4 text-sm">
                    <p className="text-slate-600">$ 29.00</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">Chris Jordan</p>
                    <p className="text-slate-500">Looks amazing out of the box. I barely had to customize anything.</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button className="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white shadow-lg rounded-md w-full sm:w-72">
                <img className='w-full sm:w-72 h-48 object-cover rounded-md'
                    src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
                    alt="image" />
                <div className="p-4 text-sm">
                    <p className="text-slate-600">$ 29.00</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">Chris Jordan</p>
                    <p className="text-slate-500">Looks amazing out of the box. I barely had to customize anything.</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button className="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white shadow-lg rounded-md w-full sm:w-72">
                <img className='w-full sm:w-72 h-48 object-cover rounded-md'
                    src="https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=600&auto=format&fit=crop"
                    alt="image" />
                <div className="p-4 text-sm">
                    <p className="text-slate-600">$ 29.00</p>
                    <p className="text-slate-800 text-base font-medium my-1.5">Chris Jordan</p>
                    <p className="text-slate-500">Looks amazing out of the box. I barely had to customize anything.</p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="bg-slate-100 text-slate-600 py-2">
                            Add to cart
                        </button>
                        <button className="bg-slate-800 text-white py-2">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses
