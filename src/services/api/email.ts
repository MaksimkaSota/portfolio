import { isAxiosError } from 'axios';
import { api } from './api';
import i18next from '../localization/i18n';
import { EmailStatus, ErrorTxtKey, FieldName, FormHintTxtKey } from '../../utils/types/enums';
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
    setStatus(i18next.t(FormHintTxtKey.Sending));
    setEmailStatus(EmailStatus.Sending);
    await api.post('', formData);
    setStatus(i18next.t(FormHintTxtKey.SendingSuccess));
    setEmailStatus(EmailStatus.Success);
    setFieldValue(FieldName.Message, '');
    setFieldTouched(FieldName.Message, false);

    localStorage.removeItem(FieldName.Message);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      setStatus(i18next.t(ErrorTxtKey.Sending, { error: error.response?.data.error || error.message }));
      setEmailStatus(EmailStatus.Failure);
    }
  }

  setSubmitting(false);
};
