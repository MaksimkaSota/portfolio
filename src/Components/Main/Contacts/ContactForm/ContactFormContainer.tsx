import { type FC, type ReactElement, useState } from 'react';
import { Formik, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import { ContactForm } from './ContactForm';
import { sendEmail } from '../../../../services/api/email';
import type { EmailStatusType, FormDataType } from '../../../../utils/types/types';
import { EmailStatus, FieldName, FormHintTxtKey, ValidationTxtKey } from '../../../../utils/types/enums';

const validationSchema = (t: TFunction): Object => {
  return Yup.object().shape({
    name: Yup.string()
      .min(3, t(ValidationTxtKey.Min, { number: 3 }))
      .max(50, t(ValidationTxtKey.Max, { number: 50 }))
      .required(t(ValidationTxtKey.Required)),
    email: Yup.string()
      .max(50, t(ValidationTxtKey.Max, { number: 50 }))
      .email(t(ValidationTxtKey.Mail))
      .required(t(ValidationTxtKey.Required)),
    message: Yup.string().required(t(ValidationTxtKey.Required)),
  });
};

export const ContactFormContainer: FC = (): ReactElement => {
  const { t } = useTranslation();
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
      initialStatus={t(FormHintTxtKey.InitialStatus)}
      validationSchema={validationSchema(t)}
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
        resetForm,
        validateForm,
      }): ReactElement => (
        <ContactForm
          values={values}
          status={status}
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
          validateForm={validateForm}
        />
      )}
    </Formik>
  );
};
