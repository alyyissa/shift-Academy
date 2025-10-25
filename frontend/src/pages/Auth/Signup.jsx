import { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import styles from './Auth.module.css';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import {lebaneseUniversities} from "../../assets/assets"

const Signup = () => {
    const [university, setUniversity] = useState("");
    const [loading, setLoading] = useState(true);
    const [showPass, setShowPass] = useState(false);

    const togglePass = () =>{
        setShowPass(!showPass)
    }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="bg-cover bg-no-repeat bg-center h-screen flex justify-center items-center px-3 sm:px-4 md:px-11 lg:px-13 xl:px-14 2xl:px-16"
    style={{ backgroundImage: `url(${assets.background})` }}>
        <div  className="flex justify-center items-center flex-col" >
            <div className="relative max-w-[500px] py-10">
                <div className={`${styles["login-page"]}`}>
                    <form
                    className={`${styles["signup-form"]} sm:w-[450px] w-full bg-[#fff] border border-solid border-transparent rounded-[30px]`}
                    method="post"
                    >
                        <div className={`${styles.imgcontainer} flex justify-center relative mt-6 mb-3`}>
                            <img src={assets.logo} alt="logo" className={styles.avatar} />
                        </div>

                        <div className={`${styles["input-control"]} pt-[15px] pr-[30px] pb-[30px] pl-[30px]`}>
                            <div className="flex flex-wrap mx-2.5">
                            <div className="sm:w-[50%] w-full px-2.5">
                                <input
                                type="text"
                                placeholder="Enter Username"
                                className="w-full focus:rounded-[5px] focus:border-b-2 focus:border-solid focus:border-coprimary focus:outline-0 inline-block transition-all duration-300 ease-in-out rounded-[5px] border-b-2 text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-3 px-5 my-2"
                                name="uname"
                                required
                                />
                            </div>

                            <div className="sm:w-[50%] w-full px-2.5">
                                <input
                                type="email"
                                placeholder="Enter Email"
                                className="w-full focus:rounded-[5px] focus:border-b-2 focus:border-solid focus:border-coprimary focus:outline-0 inline-block transition-all duration-300 ease-in-out rounded-[5px] border-b-2 text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-3 px-5 my-2"
                                name="email"
                                required
                                />
                            </div>

                            <div className='w-full px-2.5'>
                                <select 
                                className='w-full focus:rounded-[5px] focus:border-b-2 focus:border-solid focus:border-coprimary focus:outline-0 inline-block transition-all duration-300 ease-in-out rounded-[5px] border-b-2 text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-3 px-5 my-2'
                                >
                                    <option className='text-[#666]' hidden>-- Select Your University --</option>
                                    {lebaneseUniversities.map((uni, index)=>(
                                        <option key={index} value={uni} className='text-[#666]'>
                                            {uni}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='px-2.5 sm:w-[50%] w-full'>
                                <select 
                                className='w-full focus:rounded-[5px] focus:border-b-2 focus:border-solid focus:border-coprimary focus:outline-0 inline-block transition-all duration-300 ease-in-out rounded-[5px] border-b-2 text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-3 px-5 my-2'>
                                    <option className='text-[#666]' hidden>Gender</option>
                                    <option value="" className='text-[#666]'>Male</option>
                                    <option value="" className='text-[#666]'>Female</option>
                                </select>
                            </div>

                            <div className='px-2.5 sm:w-[50%] w-full'>
                                <select 
                                className='w-full focus:rounded-[5px] focus:border-b-2 focus:border-solid focus:border-coprimary focus:outline-0 inline-block transition-all duration-300 ease-in-out rounded-[5px] border-b-2 text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-3 px-5 my-2'>
                                    <option className='text-[#666]' hidden>Academic Year</option>
                                    <option value="" className='text-[#666]'>1st year</option>
                                    <option value="" className='text-[#666]'>2nd year</option>
                                    <option value="" className='text-[#666]'>3rd year</option>
                                    <option value="" className='text-[#666]'>3+ years</option>
                                </select>
                            </div>

                            <div className="sm:w-[50%] w-full px-2.5">
                                <input
                                type="password"
                                placeholder="Enter Password"
                                className="focus:rounded-[5px] focus:border-b-2 focus:border-solid focus:border-coprimary focus:outline-0 w-full inline-block transition-all duration-300 ease-in-out rounded-[5px] border-b-2 text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-3 px-5 my-2"
                                name="password"
                                required
                                />
                            </div>

                            <div className="sm:w-[50%] w-full px-2.5">
                                <span className={`${styles["password-field-show"]} relative`}>
                                <input
                                    className={`${styles["password-field"]} focus:rounded-[5px] focus:border-b-2 focus:border-solid focus:border-copraimry focus:outline-0 w-full inline-block transition-all duration-300 ease-in-out rounded-[5px] border-b-2 text-[14px] text-[#666] bg-[#f8f8f8] border-solid border-[#ccc] py-3 px-5 my-2`}
                                    type={showPass ? 'text' : 'password'}
                                    placeholder="Re-enter Password"
                                    name="passwordConfirm"
                                    required
                                />
                                <span
                                    onClick={togglePass}
                                    className={`fa fa-fw ${showPass ? "fa-eye-slash" : "fa-eye"} cursor-pointer absolute top-[3px] right-2.5 z-2 text-[#868686]`}
                                ></span>
                                </span>
                            </div>
                            </div>

                            <label
                            className={`${styles["label-container"]} relative inline-block pl-[30px] my-5 text-[14px] text-[#868686] leading-[25px] ml-5`}
                            >
                                I agree with{" "}
                                <a href="#" className="text-coprimary font-semibold underline decoration-1">
                                    privacy policy
                                </a>
                                <input type="checkbox" />
                                <span
                                    className={`${styles.checkmark} absolute top-0.5 left-0.5 h-5 w-5 bg-[#fff] outline-2 outline-solid outline-transparent border-2 border-solid border-[#cccccc] rounded-[10px]`}>
                                    </span>
                            </label>

                            <Button text="Sign up"/>
                            <div className={`${styles["login-with-btns"]} text-center`}>
                                <span className="mt-2.5 block text-[#868686] text-[14px]">
                                    Already have an account?
                                    <Link to="/login" className='duration-300 hover:text-[#444] ease-in-out font-semibold text-coprimary'> Login</Link>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}

export default Signup
