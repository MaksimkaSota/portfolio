import type { ChangeEvent, FC, KeyboardEvent, ReactElement } from 'react';
import { Form } from 'formik';
import cn from 'classnames';
import classes from './ContactForm.module.scss';
import { FormField } from '../../../Common/FormField/FormField';
import { Button } from '../../../Common/Buttons/Button/Button';
import { ElementName, EmailStatus, FieldName, KeyboardEventCode } from '../../../../utils/types/enums';
import type {
  EmailStatusType,
  FieldChangeType,
  FormDataType,
  FormikErrorsType,
  FormikTouchedType,
  SetStatusType,
  SubmitFormType,
} from '../../../../utils/types/types';

type PropsType = {
  values: FormDataType;
  status: string;
  emailStatus: EmailStatusType;
  touched: FormikTouchedType;
  errors: FormikErrorsType;
  isValid: boolean;
  isSubmitting: boolean;
  handleChange: FieldChangeType;
  setStatus: SetStatusType;
  submitForm: SubmitFormType;
};

export const ContactForm: FC<PropsType> = ({
  values,
  status,
  emailStatus,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleChange,
  setStatus,
  submitForm,
}): ReactElement => {
  const isFormValid = !isValid && Object.keys(errors).some((key) => touched[key]);

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string): void => {
    handleChange(event);
    setStatus('');
    localStorage.setItem(name, event.target.value);
  };

  const onFieldKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    if (event.code === KeyboardEventCode.Enter && !event.shiftKey) {
      submitForm();
    }
  };

  return (
    <Form className={classes.contactForm}>
      <h5 className={classes.formTitle}>Contact with me</h5>
      <div className={classes.wrapper}>
        <FormField
          name={FieldName.Name}
          type={ElementName.TypeText}
          placeholder="Name"
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
          placeholder="Email"
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
          placeholder={`Message\n\n\n\nShift+Enter for new line`}
          disabled={isSubmitting}
          values={values}
          touched={touched}
          errors={errors}
          onChange={(event) => onFieldChange(event, FieldName.Message)}
          onKeyDown={onFieldKeyDown}
        />
        <Button
          text="Send message"
          type={ElementName.TypeSubmit}
          className={classes.sendButton}
          disabled={isFormValid || isSubmitting}
        />
        <div className={classes.statusContainer}>
          {status && (
            <p
              className={cn(classes.status, {
                [classes.statusSending]: emailStatus === EmailStatus.Sending,
                [classes.successStatus]: emailStatus === EmailStatus.Success,
                [classes.failureStatus]: emailStatus === EmailStatus.Failure,
              })}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </Form>
  );
};
