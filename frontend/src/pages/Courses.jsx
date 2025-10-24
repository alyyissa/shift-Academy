import React from 'react'

const Courses = () => {
  return (
    <div className='px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16'>
        <div className="flex justify-center mt-10">
            <div className="flex items-center bg-white p-1 border border-gray-500/50 text-sm w-auto rounded-full">
                <div className="flex items-center">
                    <input
                        type="radio"
                        name="options"
                        id="html"
                        className="hidden peer"
                        defaultChecked
                    />
                    <label
                        htmlFor="html"
                        className="cursor-pointer rounded-full py-2 px-8 text-gray-500 transition-colors duration-200 peer-checked:bg-coprimary peer-checked:text-white"
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
                        className="cursor-pointer rounded-full py-2 px-8 text-gray-500 transition-colors duration-200 peer-checked:bg-coprimary peer-checked:text-white"
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
                        className="cursor-pointer rounded-full py-2 px-8 text-gray-500 transition-colors duration-200 peer-checked:bg-coprimary peer-checked:text-white"
                    >
                        Elective
                    </label>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap justify-around my-10 gap-7'>
            <div className="flex flex-col bg-white shadow-lg rounded-md w-72">
                <img className='w-72 h-48 object-cover rounded-md'
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
            <div className="flex flex-col bg-white shadow-md w-72 rounded-md">
                <img className='w-72 h-48 object-cover rounded-md'
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
            <div className="flex flex-col bg-white shadow-md w-72 rounded-md" >
                <img className='w-72 h-48 object-cover rounded-md'
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
            <div className="flex flex-col bg-white shadow-md w-72 rounded-md" >
                <img className='w-72 h-48 object-cover rounded-md'
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
            <div className="flex flex-col bg-white shadow-md w-72 rounded-md" >
                <img className='w-72 h-48 object-cover rounded-md'
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
            <div className="flex flex-col bg-white shadow-md w-72 rounded-md" >
                <img className='w-72 h-48 object-cover rounded-md'
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
