import React from 'react'

const Button = ({styles}) => {
  return (
    <a href="https://vmeh734.setmore.com/vme">
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Jetzt Termin vereinbaren
    </button>
    </a>
  )
}

export default Button