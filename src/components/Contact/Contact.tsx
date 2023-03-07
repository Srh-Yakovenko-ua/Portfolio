import React from 'react'
import main from './../../common/styles/container.module.css'
import style from './contact.module.css'
import { useFormik } from 'formik'
import { MainTitle } from '../../common/components/MainTitle/MainTitle'
import emailjs from '@emailjs/browser'
import { EMAIL_SERVICE } from '../../common/constants/email-service'
import { validateSchema } from '../../common/constants/validate-schema'

interface DataFormik {
  name: string
  email: string
  message: string
}

export const Contact = () => {
  const { handleSubmit, getFieldProps, touched, errors, resetForm } = useFormik<DataFormik>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validateSchema,
    onSubmit: (data: DataFormik) => {
      emailjs
        .send(
          EMAIL_SERVICE.YOUR_SERVICE_ID,
          EMAIL_SERVICE.YOUR_TEMPLATE_ID,
          {
            name: data.name,
            email: data.email,
            message: data.message,
          },
          EMAIL_SERVICE.YOUR_PUBLIC_KEY
        )
        .then(
          (res) => {
            resetForm()
            alert('Message sent successfully')
          },
          (err: any) => {
            console.log(err)
          }
        )
    },
  })

  return (
    <div className={`${main.container} ${style.contactContainer}`}>
      <MainTitle nameTitle="Contact" className={style.animateContactTitle} />

      <form className={style.form} onSubmit={handleSubmit}>
        <span className={style.text}>I am available for work</span>
        <input
          id="name"
          type="text"
          className={style.input}
          placeholder="Your name"
          {...getFieldProps('name')}
        />
        {errors.name && touched.name && <div className={style.error}>{errors.name}</div>}
        <input
          id="email"
          type="text"
          className={style.input}
          placeholder="Your email"
          {...getFieldProps('email')}
        />
        {errors.email && touched.email && <div className={style.error}>{errors.email}</div>}
        <textarea
          id="message"
          className={style.textarea}
          placeholder={'Your message'}
          {...getFieldProps('message')}
        />
        {errors.message && touched.message && <div className={style.error}>{errors.message}</div>}
        <button type="submit" className={style.submit}>
          send message
        </button>
      </form>
    </div>
  )
}
