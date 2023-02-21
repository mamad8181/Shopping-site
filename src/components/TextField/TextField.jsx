
import React from 'react'

export const TextField = (props) => {
  const { label, validation, placeholder, className, htmlFor } = props

  return (
    <div>
        <label htmlFor={htmlFor}>{label}</label>
        <input id={htmlFor} placeholder={placeholder} className={className} {...validation} />
        {/* {error && <p className="mt-2 text-sm text-red-500 dark:text-red-400">
            {error}
        </p>} */}
    </div>
  )
}
