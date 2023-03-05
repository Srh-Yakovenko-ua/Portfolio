import React from 'react'
import main from './../../common/styles/container.module.css'
import style from './contact.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const Contact = () => {
  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string().required().email('Invalid email address'),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <div className={`${main.container} ${style.contactContainer}`}>
      <div className={style.title}>
        <h2>Contact</h2>
      </div>

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
