import { isAxiosError } from 'axios';
import { api } from './api';
import { EmailStatus, FieldName } from '../../utils/types/enums';
import type {
  EmailStatusType,
  FormDataType,
  SetFieldTouchedType,
  SetFieldValueType,
  SetStatusType,
  SetSubmittingType,
} from '../../utils/types/types';

export const sendEmail = async (
  formData: FormDataType,
  setFieldValue: SetFieldValueType,
  setFieldTouched: SetFieldTouchedType,
  setSubmitting: SetSubmittingType,
  setStatus: SetStatusType,
  setEmailStatus: (emailStatus: EmailStatusType) => void
): Promise<void> => {
  try {
    setStatus('Email is being sent...');
    setEmailStatus(EmailStatus.Sending);
    await api.post('', formData);
    setStatus('Successful sending.');
    setEmailStatus(EmailStatus.Success);
    setFieldValue(FieldName.Message, '');
    setFieldTouched(FieldName.Message, false);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      setStatus(`Sending error. ${error.response?.data.error || error.message}`);
      setEmailStatus(EmailStatus.Failure);
    }
  }
  setSubmitting(false);
};
