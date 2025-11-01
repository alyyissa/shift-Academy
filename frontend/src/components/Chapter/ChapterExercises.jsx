import React from 'react'
import { assets } from "../../assets/assets";
import CircularTimer from '../CircularTimer';

const ChapterExercises = () => {
  return (
    <div className='h-auto w-full  bg-white'>
      <div className=''>
        <div className='grid grid-cols-1 items-start lg:grid-cols-[330px_1fr]'>
          <div className='sticky top-0 hidden h-dvh flex-col gap-12 overflow-hidden bg-white p-6 backdrop-blur-sm [mask:linear-gradient(black,black,black,transparent)] lg:flex'>
            <div className='mt-4 flex items-center flex-col'>
              <img src={assets.logo} alt="" className=''/>
              <CircularTimer 
              minutes="10"
              />
              <ol start="1" className="space-y-2 px-4 mt-10"><li className="text-theme list-decimal pl-1 text-base">What is JSX in React?</li><li className=" list-decimal pl-1 text-base">React components must always return a single JSX element.</li><li className=" list-decimal pl-1 text-base">What is the purpose of React components?</li><li className=" list-decimal pl-1 text-base">Which of the following are valid React lifecycle methods? (Select all that apply)</li><li className=" list-decimal pl-1 text-base">What will be the output of the following React code?</li><li className=" list-decimal pl-1 text-base">In React, props are used to pass data from parent components to child components.</li><li className=" list-decimal pl-1 text-base">What is the output of the following code snippet?</li><li className=" list-decimal pl-1 text-base">Which of the following are valid ways to conditionally render content in React? (Select all that apply)</li><li className=" list-decimal pl-1 text-base">In React, what is the purpose of keys in lists?</li><li className=" list-decimal pl-1 text-base">What will be the result of the following React code?</li><li className=" list-decimal pl-1 text-base">React uses a virtual DOM to optimize rendering performance.</li></ol>
            </div>
          </div>
          <div className='theme-gradient lg:bg-linear-to-r lg:from-[#F2F2F2] lg:to-[#F2F2F2] flex min-h-screen flex-col items-center px-5 justify-center'>
            <div className='md:mb-10 mt-5 flex flex-col items-center justify-center gap-1.5 lg:hidden'>
              <img alt="logo" className='mb-5' src={assets.logo}></img>
              <h1 className="text-center text-2xl font-bold">FLEXY QUIZ</h1>
            </div>
            <div className='relative mb-18 min-h-[500px] w-full rounded bg-white px-4 pb-10 md:px-16 md:pb-20 lg:bg-transparent'>
              <div className='mb-7 lg:hidden'>
                <CircularTimer />
              </div>
              <div className='mx-auto mt-8 mb-10 max-w-full md:max-w-[88%]'>
                <h2 className='text-coprimary mb-10 text-center text-[clamp(18px,4vw,28px)] leading-[1.3] font-medium'>What is JSX in React?</h2>
                <div className='max-h-full'>
                  <div className="max-h-full">
                    {["A syntax extension for JavaScript that allows writing HTML-like code in JavaScript",
                      "Allows running JavaScript on the server side",
                      "A CSS preprocessor",
                      "A package manager for JavaScript"].map((option, i) => (
                      <div
                        key={i}
                        className="text-secondary mt-[clamp(13px,calc(10px+6*((100vw-600px)/1320)),16px)] cursor-pointer border-b text-[clamp(18px,4vw,16px)] border-[#CFD1D5]"
                      >
                        <label className="grid cursor-pointer grid-cols-[min-content_min-content_auto] gap-2 p-4 text-lg">
                          <input
                            className="peer sr-only m-0"
                            type="radio"
                            name="question1"
                            value={option}
                          />
                          <span className="peer-checked:border-theme relative top-1 mr-1 inline-block size-5 rounded-full border border-[#CFD1D5] bg-white disabled:cursor-auto">
                            <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 opacity-0"></span>
                          </span>
                          <span>{String.fromCharCode(97 + i)})</span>
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex w-[90%] justify-center gap-5 md:w-auto">
                <button className="w-[150px] font-normal not-disabled:theme-gradient border-none active:shadow-active disabled:bg-disabled-button disabled:[&amp;&gt;svg&gt;path]:fill-dark-grey disabled:text-dark-grey hover:bg-coprimary flex h-10 cursor-pointer items-center gap-2.5 rounded px-4 text-lg text-black transition-colors duration-300 [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] active:transition-all active:duration-200 not-disabled:active:scale-[0.98] disabled:transform-[unset] disabled:cursor-not-allowed disabled:shadow-none md:min-h-[50px] md:w-[195px] md:[-webkit-tap-highlight-color:unset] md:[tap-highlight-color:unset] justify-between">Next
                  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.028 6.46731C16.7338 6.17573 16.2589 6.17784 15.9673 6.47204C15.6757 6.76624 15.6778 7.24111 15.972 7.53269L17.735 9.28C18.4505 9.98914 18.9413 10.4772 19.2734 10.8907C19.3813 11.0251 19.4655 11.1434 19.5309 11.25L4.5 11.25C4.08579 11.25 3.75 11.5858 3.75 12C3.75 12.4142 4.08579 12.75 4.5 12.75L19.5309 12.75C19.4655 12.8566 19.3813 12.9749 19.2734 13.1093C18.9413 13.5228 18.4505 14.0109 17.735 14.72L15.972 16.4673C15.6778 16.7589 15.6757 17.2338 15.9673 17.528C16.2589 17.8222 16.7338 17.8243 17.028 17.5327L18.8227 15.7539C19.4987 15.084 20.0511 14.5364 20.4429 14.0485C20.8504 13.5412 21.1453 13.0263 21.2241 12.4082C21.2414 12.2726 21.25 12.1363 21.25 12C21.25 11.8637 21.2414 11.7274 21.2241 11.5918C21.1453 10.9737 20.8504 10.4588 20.4429 9.95146C20.0511 9.46358 19.4987 8.91604 18.8227 8.24609L17.028 6.46731Z" fill="black">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Result Banner */}
          {/* <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] p-4">
            <div className="bg-white flex w-[600px] flex-col items-center rounded-[10px] px-6 py-12"><svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9999 41.7083C12.3933 41.7083 4.58325 33.8983 4.58325 24.2917C4.58325 14.685 12.3933 6.875 21.9999 6.875C31.6066 6.875 39.4166 14.685 39.4166 24.2917C39.4166 33.8983 31.6066 41.7083 21.9999 41.7083ZM21.9999 9.625C13.9149 9.625 7.33325 16.2067 7.33325 24.2917C7.33325 32.3767 13.9149 38.9583 21.9999 38.9583C30.0849 38.9583 36.6666 32.3767 36.6666 24.2917C36.6666 16.2067 30.0849 9.625 21.9999 9.625Z" fill="#fe843d"></path><path d="M22 25.2084C21.2483 25.2084 20.625 24.5851 20.625 23.8334V14.6667C20.625 13.9151 21.2483 13.2917 22 13.2917C22.7517 13.2917 23.375 13.9151 23.375 14.6667V23.8334C23.375 24.5851 22.7517 25.2084 22 25.2084Z" fill="#fe843d"></path><path d="M27.5 5.04175H16.5C15.7483 5.04175 15.125 4.41841 15.125 3.66675C15.125 2.91508 15.7483 2.29175 16.5 2.29175H27.5C28.2517 2.29175 28.875 2.91508 28.875 3.66675C28.875 4.41841 28.2517 5.04175 27.5 5.04175Z" fill="#fe843d"></path></svg><h6 className="mt-6 mb-5 text-[clamp(24px,4vw,32px)] font-bold">Your time is up!</h6><p className="text-coprimary mb-[clamp(18px,calc(18px+28*((100vw-600px)/1320)),48px)] text-center text-2xl text-[clamp(18px,4vw,24px)] leading-[1.3] font-medium">You have attempted 0 questions in total.</p><button className="w-[180px] font-semibold not-disabled:theme-gradient border-none active:shadow-active disabled:bg-disabled-button disabled:[&amp;&gt;svg&gt;path]:fill-dark-grey disabled:text-dark-grey hover:bg-theme flex h-10 cursor-pointer items-center gap-[10px] rounded px-4 text-lg text-black transition-colors duration-300 [-webkit-tap-highlight-color:transparent] [tap-highlight-color:transparent] active:transition-all active:duration-[0.2s] not-disabled:active:scale-[0.98] disabled:transform-[unset] disabled:cursor-not-allowed disabled:shadow-none md:min-h-[50px] md:w-[195px] md:[-webkit-tap-highlight-color:unset] md:[tap-highlight-color:unset] justify-between">SHOW RESULT<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.028 6.46731C16.7338 6.17573 16.2589 6.17784 15.9673 6.47204C15.6757 6.76624 15.6778 7.24111 15.972 7.53269L17.735 9.28C18.4505 9.98914 18.9413 10.4772 19.2734 10.8907C19.3813 11.0251 19.4655 11.1434 19.5309 11.25L4.5 11.25C4.08579 11.25 3.75 11.5858 3.75 12C3.75 12.4142 4.08579 12.75 4.5 12.75L19.5309 12.75C19.4655 12.8566 19.3813 12.9749 19.2734 13.1093C18.9413 13.5228 18.4505 14.0109 17.735 14.72L15.972 16.4673C15.6778 16.7589 15.6757 17.2338 15.9673 17.528C16.2589 17.8222 16.7338 17.8243 17.028 17.5327L18.8227 15.7539C19.4987 15.084 20.0511 14.5364 20.4429 14.0485C20.8504 13.5412 21.1453 13.0263 21.2241 12.4082C21.2414 12.2726 21.25 12.1363 21.25 12C21.25 11.8637 21.2414 11.7274 21.2241 11.5918C21.1453 10.9737 20.8504 10.4588 20.4429 9.95146C20.0511 9.46358 19.4987 8.91604 18.8227 8.24609L17.028 6.46731Z" fill="black"></path></svg></button></div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ChapterExercises
