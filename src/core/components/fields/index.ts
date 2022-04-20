import './index.scss';
import {classNames} from '@utils/classNames/classNames';

export type BaseFieldControlProps = {
  isEdit?: boolean;
  loading?: boolean;
  className?: string;
  error?: boolean;
  helperText?: string | null;
  focused?: boolean;
  disabled?: boolean;
  heightAuto?: boolean;
};

export const fieldControlClassNames = (className: string, props: BaseFieldControlProps) => {
  const {
    className: classNameProps,
    isEdit = true,
    loading,
    error,
    focused,
    disabled,
    heightAuto,
  } = props;

  return classNames(className, 'field-control', classNameProps, {
    'field-control_is-edit': !Boolean(loading) && Boolean(isEdit),
    'field-control_is-view': !Boolean(loading) && !Boolean(isEdit),
    'field-control_is-loading': Boolean(loading),
    'field-control_error': Boolean(error),
    'field-control_focused': Boolean(focused),
    'field-control_disabled': Boolean(disabled),
    'field-control_height_auto': Boolean(heightAuto),
  });
};

export * from './CheckboxFieldControl';
export * from './SkeletonFieldControl';
export * from './TextFieldControl';
export * from './PasswordFieldControl';
export * from './RadioGroupFieldControl';
export * from './ToggleButtonGroupFieldControl';
export * from './SwitchFieldControl';
export * from './SliderFieldControl';
export * from './SelectFieldControl';
export * from './MultiSelectFieldControl';
export * from './MultiSelectExtFieldControl';
export * from './TagFieldControl';
export * from './DateFieldControl';
export * from './CountFieldControl';
