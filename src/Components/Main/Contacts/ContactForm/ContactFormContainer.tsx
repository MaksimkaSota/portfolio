import { type FC, type ReactElement, useState } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { ContactForm } from './ContactForm';
import { sendEmail } from '../../../../services/api/email';
import type { EmailStatusType, FormDataType } from '../../../../utils/types/types';
import { EmailStatus, FieldName } from '../../../../utils/types/enums';

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

  const onSubmit = (
    formData: FormDataType,
    { setFieldValue, setFieldTouched, setSubmitting, setStatus }: FormikHelpers<FormDataType>
  ): void => {
    sendEmail(formData, setFieldValue, setFieldTouched, setSubmitting, setStatus, setEmailStatus);
  };

  return (
    <Formik
      initialValues={{
        name: localStorage.getItem(FieldName.Name) || '',
        email: localStorage.getItem(FieldName.Email) || '',
        message: localStorage.getItem(FieldName.Message) || '',
      }}
      initialStatus="Message submission form"
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        status,
        initialStatus,
        touched,
        errors,
        isValid,
        isSubmitting,
        handleChange,
        setStatus,
        submitForm,
        resetForm,
      }): ReactElement => (
        <ContactForm
          values={values}
          status={status}
          initialStatus={initialStatus}
          emailStatus={emailStatus}
          setEmailStatus={setEmailStatus}
          touched={touched}
          errors={errors}
          isValid={isValid}
          isSubmitting={isSubmitting}
          handleChange={handleChange}
          setStatus={setStatus}
          submitForm={submitForm}
          resetForm={resetForm}
        />
      )}
    </Formik>
  );
};
