import { type ChangeEvent, type FC, type KeyboardEvent, type ReactElement, useEffect } from 'react';
import { Form } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './ContactForm.module.scss';
import { FormField } from '../../../Common/FormField/FormField';
import { Button } from '../../../Common/Buttons/Button/Button';
import {
  ContentTxtKey,
  ElementName,
  EmailStatus,
  FieldName,
  FormHintTxtKey,
  KeyboardEventCode,
} from '../../../../utils/types/enums';
import type {
  EmailStatusType,
  FieldChangeType,
  FormDataType,
  FormikErrorsType,
  FormikTouchedType,
  ResetFormType,
  SetStatusType,
  SubmitFormType,
  ValidateFormType,
} from '../../../../utils/types/types';

type PropsType = {
  values: FormDataType;
  status: string;
  emailStatus: EmailStatusType;
  setEmailStatus: (emailStatus: EmailStatusType) => void;
  touched: FormikTouchedType;
  errors: FormikErrorsType;
  isValid: boolean;
  isSubmitting: boolean;
  handleChange: FieldChangeType;
  setStatus: SetStatusType;
  submitForm: SubmitFormType;
  resetForm: ResetFormType;
  validateForm: ValidateFormType;
};

export const ContactForm: FC<PropsType> = ({
  values,
  status,
  emailStatus,
  setEmailStatus,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleChange,
  setStatus,
  submitForm,
  resetForm,
  validateForm,
}): ReactElement => {
  const { t } = useTranslation();

  useEffect(() => {
    setStatus(t(FormHintTxtKey.InitialStatus));
    setEmailStatus(EmailStatus.Initial);
    validateForm();
  }, [t, setStatus, setEmailStatus, validateForm]);

  const isFormValid = !isValid && Object.keys(errors).some((key) => touched[key]);

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string): void => {
    handleChange(event);
    setStatus(t(FormHintTxtKey.InitialStatus));
    setEmailStatus(EmailStatus.Initial);

    localStorage.setItem(name, event.target.value);
  };

  const onFieldKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    if (event.code === KeyboardEventCode.Enter && !event.shiftKey) {
      submitForm();
    }
  };

  const onResetButtonClick = (): void => {
    resetForm({
      status: t(FormHintTxtKey.InitialStatus),
      values: {
        [FieldName.Name]: '',
        [FieldName.Email]: '',
        [FieldName.Message]: '',
      },
      touched: {},
      errors: {},
    });

    setEmailStatus(EmailStatus.Initial);

    localStorage.removeItem(FieldName.Name);
    localStorage.removeItem(FieldName.Email);
    localStorage.removeItem(FieldName.Message);
  };

  return (
    <Form className={classes.contactForm}>
      <h5 className={classes.formTitle}>{t(FormHintTxtKey.Contact)}</h5>
      <div className={classes.wrapper}>
        <FormField
          name={FieldName.Name}
          type={ElementName.TypeText}
          placeholder={t(FormHintTxtKey.Name)}
          disabled={isSubmitting}
          values={values}
          touched={touched}
          errors={errors}
          onChange={(event) => onFieldChange(event, FieldName.Name)}
          onKeyDown={onFieldKeyDown}
        />
        <FormField
          name={FieldName.Email}
          type={ElementName.TypeText}
          placeholder={t(FormHintTxtKey.Mail)}
          disabled={isSubmitting}
          values={values}
          touched={touched}
          errors={errors}
          onChange={(event) => onFieldChange(event, FieldName.Email)}
          onKeyDown={onFieldKeyDown}
        />
        <FormField
          name={FieldName.Message}
          component={ElementName.Textarea}
          placeholder={t(FormHintTxtKey.Message)}
          disabled={isSubmitting}
          values={values}
          touched={touched}
          errors={errors}
          onChange={(event) => onFieldChange(event, FieldName.Message)}
          onKeyDown={onFieldKeyDown}
        />
        <Button
          text={t(ContentTxtKey.ResetButton)}
          type={ElementName.TypeReset}
          className={classes.resetButton}
          onClick={onResetButtonClick}
          disabled={isSubmitting}
        />
        <Button
          text={t(ContentTxtKey.SendButton)}
          type={ElementName.TypeSubmit}
          className={classes.sendButton}
          disabled={isFormValid || isSubmitting}
        />
      </div>
      {status && (
        <p
          className={cn(classes.status, {
            [classes.initialStatus]: emailStatus === EmailStatus.Initial,
            [classes.statusSending]: emailStatus === EmailStatus.Sending,
            [classes.successStatus]: emailStatus === EmailStatus.Success,
            [classes.failureStatus]: emailStatus === EmailStatus.Failure,
          })}
        >
          {status}
        </p>
      )}
    </Form>
  );
};
