import React,{useEffect, useState} from 'react'
import Loading from '../components/Loading/Loading';
import { NavLink, Link, Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumps';

const Chapter = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        }, 500)
        return () => clearTimeout(timer);
    }, [])

    if (loading) return <Loading />

  return (
    <div>
        <div className=" space-x-2 text-sm text-gray-500 font-medium pt-4 bg-[#f5f5f5]  shadow-md">
            <Breadcrumbs />
            <div className="flex gap-3 mx-3 sm:mx-4 md:mx-11 lg:mx-13 xl:mx-14 2xl:mx-16 bottom-0">
              <h3 className="text-4xl py-5 font-bold">Course: Data Structure</h3>
            </div>

            <div className="flex gap-3 mx-3 sm:mx-4 md:mx-11 lg:mx-13 xl:mx-14 2xl:mx-16 bottom-0">
                <NavLink
                    to=""
                    end
                    className={({ isActive }) =>
                    `inline-block font-semibold p-2 text-coprimary ${
                        isActive ? "border-b-2 border-coprimary" : ""
                    }`
                    }
                >
                    Links
                </NavLink>

                <NavLink
                    to="exercises"
                    className={({ isActive }) =>
                    `inline-block font-semibold p-2 text-coprimary ${
                        isActive ? "border-b-2 border-coprimary" : ""
                    }`
                    }
                >
                    Exercises
                </NavLink>

                <NavLink
                    to="summary"
                    className={({ isActive }) =>
                    `inline-block font-semibold p-2 text-coprimary ${
                        isActive ? "border-b-2 border-coprimary" : ""
                    }`
                    }
                >
                    Summary
                </NavLink>
            </div>
        </div>
        <Outlet />
      </div>
  )
}

export default Chapter
