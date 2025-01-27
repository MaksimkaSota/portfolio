import type { FC, ReactElement } from 'react';
import { ErrorMessage, Field } from 'formik';
import cn from 'classnames';
import classes from './FormField.module.scss';
import { ElementName } from '../../../utils/enums';
import type { FormikErrorsType, FormikTouchedType, FormikValuesType } from '../../../utils/types';

type PropsType = {
  name: string;
  component?: string;
  type?: string;
  placeholder: string;
  values: FormikValuesType;
  touched: FormikTouchedType;
  errors: FormikErrorsType;
};

export const FormField: FC<PropsType> = ({
  name,
  component = ElementName.Input,
  values,
  touched,
  errors,
  ...props
}): ReactElement => {
  return (
    <div className={cn(classes.formField)}>
      <Field
        className={cn(classes.field, {
          [classes.textarea]: component === ElementName.Textarea,
          [classes.validationError]: touched?.[name] && errors?.[name],
        })}
        name={name}
        component={component}
        title={values[name] ? undefined : 'Fill in this field'}
        {...props}
      />
      <ErrorMessage className={classes.fieldError} name={name} component={ElementName.P} />
    </div>
  );
};
