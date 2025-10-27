import React from 'react'
import Title from '../Title';

const Section2 = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

    const faqs = [
        {
            question: "How to use this component?",
            answer: "To use this component, you need to import it in your project and use it in your JSX code. Here's an example of how to use it:",
        },
        {
            question: "Are there any other components available?",
            answer: "Yes, there are many other components available in this library. You can find them in the 'Components' section of the website.",
        },
        {
            question: "Are components responsive?",
            answer: "Yes, all components are responsive and can be used on different screen sizes.",
        },
        {
            question: "Can I customize the components?",
            answer: "Yes, you can customize the components by passing props to them. You can find more information about customizing components in the 'Customization' section of the website.",
        },
    ];

  return (
    <>
    <div className="flex flex-col items-center justify-center w-full mx-auto px-3 sm:px-4 md:px-11 lg:px-13 xl:px-12 2xl:px-16 max-w-7xl bg-white pb-24 pt-12">
      <Title 
      smallTitle="FAQ's"
      Title="Looking for answer?"
      Desc="Ship Beautiful Frontends Without the Overhead — Customizable, Scalable and Developer-Friendly UI Components."
      />
      <div className="w-full flex flex-col items-center gap-6 mt-10">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="w-full"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="flex items-center justify-between w-full border border-coprimary p-4 rounded cursor-pointer"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <h2 className="text-sm w-full text-center font-semibold">{faq.question}</h2>

          <div className="ml-4 shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-500 ease-in-out ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                stroke="#1D293D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <p
          className={`text-sm text-slate-500 px-4 transition-all text-center duration-500 ease-in-out ${
            openIndex === index
              ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
              : "opacity-0 max-h-0 -translate-y-2"
          }`}
        >
          {faq.answer}
        </p>
      </div>
    ))}
  </div>
    </div>
    </>
  )
}

export default Section2
