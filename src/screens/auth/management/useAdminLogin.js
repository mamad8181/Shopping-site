
import * as yup from 'yup'

const adminLoginSchema = yup
  .object({
    userName: yup.string().required(),
    password: yup.string().required()
  })
  .required()
