import type { FC, ReactElement } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios, { isAxiosError } from 'axios';
import { ContactForm } from './ContactForm';
import { FieldName } from '../../../../utils/enums';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Must be not less than 3 symbols')
    .max(50, 'Must be not more than 50 symbols')
    .required('Required name'),
  email: Yup.string()
    .max(50, 'Must be not more than 50 symbols')
    .email('Invalid email address')
    .required('Required email address'),
  message: Yup.string().required('Required message'),
});

export type FormDataType = {
  name: string;
  email: string;
  message: string;
};

export const ContactFormContainer: FC = (): ReactElement => {
  const onSubmit = async (
    formData: FormDataType,
    { setFieldValue, setFieldTouched }: FormikHelpers<FormDataType>
  ): Promise<void> => {
    try {
      await axios.post(process.env.REACT_APP_SENDEMAIL_SERVER_LINK as string, formData);

      console.log('Successfully sent email');
      alert('Successfully sent email');

      setFieldValue(FieldName.Message, '');
      setFieldTouched(FieldName.Message, false);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error(error.response?.data.error || error.message);
        alert(error.response?.data.error || error.message);
      }
    }
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
