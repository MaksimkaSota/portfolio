import type { FC, ReactElement } from 'react';
import { ErrorMessage, Field } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import classes from './FormField.module.scss';
import { ElementName, FormHintTxtKey } from '../../../utils/types/enums';
import type {
  FieldChangeType,
  FieldKeyDownType,
  FormikErrorsType,
  FormikTouchedType,
  FormikValuesType,
} from '../../../utils/types/types';

type PropsType = {
  name: string;
  component?: string;
  type?: string;
  placeholder: string;
  disabled: boolean;
  values: FormikValuesType;
  touched: FormikTouchedType;
  errors: FormikErrorsType;
  onChange: FieldChangeType;
  onKeyDown: FieldKeyDownType;
};

export const FormField: FC<PropsType> = ({
  name,
  component = ElementName.Input,
  values,
  touched,
  errors,
  ...props
}): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={cn(classes.formField)}>
      <Field
        className={cn(classes.field, {
          [classes.textarea]: component === ElementName.Textarea,
          [classes.validationError]: touched?.[name] && errors?.[name],
        })}
        name={name}
        component={component}
        title={values[name] ? undefined : t(FormHintTxtKey.Filling)}
        {...props}
      />
      <ErrorMessage className={classes.fieldError} name={name} component={ElementName.P} />
    </div>
  );
};
