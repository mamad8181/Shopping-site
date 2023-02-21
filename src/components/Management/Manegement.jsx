
import { useState } from 'react'
import classes from './Management.module.css'

export const Management = () => {
  const [hovor, setHovor] = useState(false)

  return (
    <div onMouseEnter={() => setHovor(true)} onMouseLeave={() => setHovor(false)} className={`${classes.management_btn} flex float-left bg-white rounded-full cursor-pointer`}>
      <div className={hovor ? classes.show_text : classes.hide_text}>
        <p className='aa'>پنل مدیریت</p>
      </div>
      <div className='rounded-full bg-white w-9 h-9 p-2' >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-toggles" viewBox="0 0 16 16">
          <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"/>
        </svg>
      </div>
    </div>
  )
}
