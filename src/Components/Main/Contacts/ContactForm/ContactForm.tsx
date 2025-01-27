import type { FC, ReactElement } from 'react';
import { Form } from 'formik';
import classes from './ContactForm.module.scss';
import { FormField } from '../../../Common/FormField/FormField';
import { Button } from '../../../Common/Button/Button';
import { ElementName, FieldName } from '../../../../utils/enums';
import type { FormDataType } from './ContactFormContainer';
import type { FormikErrorsType, FormikTouchedType } from '../../../../utils/types';

type PropsType = {
  values: FormDataType;
  touched: FormikTouchedType;
  errors: FormikErrorsType;
  isValid: boolean;
};

export const ContactForm: FC<PropsType> = ({ values, touched, errors, isValid }): ReactElement => {
  const isFormValid = !isValid && Object.keys(errors).some((key) => touched[key]);

  return (
    <Form className={classes.contactForm}>
      <h5 className={classes.formTitle}>Contact with me</h5>
      <div className={classes.wrapper}>
        <FormField
          name={FieldName.Name}
          type={ElementName.TypeText}
          placeholder="Name"
          values={values}
          touched={touched}
          errors={errors}
        />
        <FormField
          name={FieldName.Email}
          type={ElementName.TypeText}
          placeholder="Email"
          values={values}
          touched={touched}
          errors={errors}
        />
        <FormField
          name={FieldName.Message}
          component={ElementName.Textarea}
          placeholder="Message"
          values={values}
          touched={touched}
          errors={errors}
        />
        <Button
          text="Send message"
          type={ElementName.TypeSubmit}
          className={classes.sendButton}
          disabled={isFormValid}
        />
      </div>
    </Form>
  );
};
