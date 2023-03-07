import * as Yup from 'yup'

export const validateSchema = Yup.object({
  name: Yup.string(),
  email: Yup.string().required().email('Invalid email address'),
  message: Yup.string(),
})
