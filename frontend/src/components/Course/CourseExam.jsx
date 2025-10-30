import React,{useState,useEffect} from 'react'
import Loading from '../Loading/Loading';
import { assets } from '../../assets/assets';
import CircularTimer from '../CircularTimer';
const CourseExam = () => {
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
          
        </div>
)
}

export default CourseExam
