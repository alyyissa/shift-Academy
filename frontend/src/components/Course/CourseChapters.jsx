import React,{useState, useEffect} from 'react'
import Loading from '../Loading/Loading';

const CourseChapters = () => {
  const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        }, 500)
        return () => clearTimeout(timer);
    }, [])

    if (loading) return <Loading />
  return (
    <div className='px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16'>
      <h1></h1>
      
    </div>
  )
}

export default CourseChapters
