import { Button, TextField } from 'components'
import { Container } from 'layouts'

export const ManagementLoginScreen = () => {
  return (
    <Container className='w-2/6 border-2 m-auto my-16' component='form'>
        <div className='border-b-4 py-3 border-black text-center w-full' >
            <b className='text-xl' >ورود مدیر سایت</b>
        </div>
        <div className='px-10 py-12' >
        <TextField label='نام کاربری:' className='border-2 p-3 outline-none mb-2 block w-full' placeholder='*نام کاربری را وارد کنید' />
        <TextField label='رمز عبور:' className='border-2 p-3 outline-none mb-5 block w-full' placeholder='*رمز عبور را وارد کنید' />
        <a href='*' className='mb-1 w-48 border-b-2 border-black block hover:text-gray-500' >رمز عبور را فراموش کرده اید؟</a>
        <a href='*' className='hover:text-gray-500 border-b-2 border-black'>تغییر نام کاربری</a>
        <Button className='bg-black text-white rounded-full w-full mt-7' ><p>ورود</p></Button>
        </div>
    </Container>
  )
}
