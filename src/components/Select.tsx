import { SelectOption } from '@/models';
import { InputError } from '@/styled-components';
import { InputBaseProps, MenuItem, TextField } from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

const formValidation = (errors: FieldErrors, errorKey: string) => {
  return errors[errorKey] ? <InputError className="error-message">{errors[errorKey].message}</InputError> : '';
};

interface SelectProps {
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors;
  label: string;
  options: SelectOption[];
  inputProps?: InputBaseProps['inputProps'];
}

export const CustomSelect = ({ register, name, errors, label, options, inputProps }: SelectProps) => {
  return (
    <div style={{ textAlign: 'start' }}>
      <TextField
        required
        select
        error={!!errors[name]}
        id={name}
        label={label}
        variant="standard"
        {...register(name)}
        {...(inputProps && { inputProps: inputProps })}
        inputProps={{ 'data-testid': name }}
        defaultValue={options[0].value}
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {formValidation(errors, name)}
    </div>
  );
};

export default CustomSelect;
