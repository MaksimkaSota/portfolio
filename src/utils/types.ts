import type { ChangeEvent } from 'react';
import type { FormikErrors } from 'formik';
import type { EmailStatus } from './enums';

export type FormDataType = {
  name: string;
  email: string;
  message: string;
};

export type FormikValuesType = { [field: string]: any };

export type FormikTouchedType = { [field: string]: boolean };

export type FormikErrorsType = { [field: string]: string };

export type SetFieldValueType = (
  field: string,
  value: any,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<any>>;

export type SetFieldTouchedType = (
  field: string,
  isTouched?: boolean,
  shouldValidate?: boolean
) => Promise<void | FormikErrors<any>>;

export type SetSubmittingType = (isSubmitting: boolean) => void;

export type SetStatusType = (status?: any) => void;

export type SubmitFormType = () => Promise<any>;

export type FieldChangeType = (event: ChangeEvent<any>) => void;

export type FieldKeyDownType = (event: KeyboardEvent) => void;

export type EmailStatusType = EmailStatus.Sending | EmailStatus.Success | EmailStatus.Failure;
