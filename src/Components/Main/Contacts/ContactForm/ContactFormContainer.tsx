import { type FC, type ReactElement, useState } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ContactForm } from './ContactForm';
import { sendEmail } from '../../../../services/api/email';
import type { EmailStatusType, FormDataType } from '../../../../utils/types';
import { EmailStatus } from '../../../../utils/enums';

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

export const ContactFormContainer: FC = (): ReactElement => {
  const [emailStatus, setEmailStatus] = useState<EmailStatusType>(EmailStatus.Sending);

  const onSubmit = async (
    formData: FormDataType,
    { setFieldValue, setFieldTouched, setSubmitting, setStatus }: FormikHelpers<FormDataType>
  ): Promise<void> => {
    await sendEmail(formData, setFieldValue, setFieldTouched, setSubmitting, setStatus, setEmailStatus);
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
      {({
        values,
        status,
        touched,
        errors,
        isValid,
        isSubmitting,
        handleChange,
        setStatus,
        submitForm,
      }): ReactElement => (
        <ContactForm
          values={values}
          status={status}
          emailStatus={emailStatus}
          touched={touched}
          errors={errors}
          isValid={isValid}
          isSubmitting={isSubmitting}
          handleChange={handleChange}
          setStatus={setStatus}
          submitForm={submitForm}
        />
      )}
    </Formik>
  );
};
