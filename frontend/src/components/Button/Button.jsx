import styles from "./Button.module.css"

const Button = ({text}) => {
  return (
    <div className={`${styles["login-btns"]} text-center mb-5`}>
        <button
        type="submit"
        className="bg-coprimary text-[14px] transition-all duration-300 ease-in-out font-semibold rounded-[5px] border-2 border-solid border-transparent text-[#fff] py-2 px-auto my-2 cursor-pointer w-[90px] hover:bg-transparent hover:text-coprimary hover:border-coprimary"
        >
            {text}
        </button>
    </div>
  )
}

export default Button
