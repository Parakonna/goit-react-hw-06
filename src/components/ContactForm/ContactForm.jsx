import { ErrorMessage, Field, Form, Formik } from 'formik'
import css from './ContactForm.module.css'
import * as Yup from "yup";


const ContactForm = ({ onAddProfile }) => {
  const handleSabmit = (values, action) => {
    onAddProfile(values);
    action.resetForm();
  }
  return (
    <Formik initialValues={{ name: "", number: "", }} onSubmit={handleSabmit} validationSchema={Yup.object({ name: Yup.string().min(2, "Name must be at least 2 characters").required() })
  }>
      <Form className={css.form}>
        <label className={css.label}>
        <span>Name</span>
        <Field type="text" name="name" className={css.input} />
        <ErrorMessage name="name" component="spam" className={css.errorMessage}/>
      </label>
        <label className={css.label}>
        <span>Number</span>
        <Field type="text" name="number" className={css.input} />
        <ErrorMessage name="number" component="spam" className={css.errorMessage}/>
        </label>
        <button type="submit" className={css.btn}>Add contact</button>

      </Form>
   </Formik>
  )
}

export default ContactForm