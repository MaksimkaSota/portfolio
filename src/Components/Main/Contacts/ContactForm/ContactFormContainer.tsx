import type { FC, ReactElement } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ContactForm } from './ContactForm';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be not less than 3 symbols')
    .max(30, 'Must be not more than 30 symbols')
    .required('Required name'),
  email: Yup.string().email('Invalid email address').required('Required email address'),
  message: Yup.string().required('Required message'),
});

export type FormDataType = {
  name: string;
  email: string;
  message: string;
};

export const ContactFormContainer: FC = (): ReactElement => {
  const onSubmit = (formData: FormDataType, { resetForm }: FormikHelpers<FormDataType>): void => {
    console.log(formData);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, touched, errors, isValid }): ReactElement => (
        <ContactForm values={values} touched={touched} errors={errors} isValid={isValid} />
      )}
    </Formik>
  );
};
