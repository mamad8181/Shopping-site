
import classes from './UserAuth.module.css'

export const Auth = () => {
  return (
    <div className={`${classes.authBtn} flex float-left border-2 border-gray-500 rounded-full cursor-pointer ml-5 pr-1`}>
      <div>
        <p className={`${classes.text} text-gray-500`}>حساب کاربری</p>
      </div>
        <div className={`${classes.userIcon} rounded-full bg-gray-500 w-10 h-10`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={`${classes.Icon} bi bi-person `}viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
            </svg>
        </div>
    </div>
  )
}
