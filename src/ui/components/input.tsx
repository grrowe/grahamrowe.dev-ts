import React, { useState } from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = 'text',
  placeholder = '',
  value = '',
  required = false,
  error = '',
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="inputField">
      <label htmlFor={label}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        id={label}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value)
        }}
        placeholder={placeholder}
        required={required}
      />
      {error && <div className="errorMessage">{error}</div>}
    </div>
  );
};

export default InputField;
