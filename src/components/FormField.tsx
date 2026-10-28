import type { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  inputClassName?: string;
}

const FormField = ({ label, name, inputClassName = '', ...inputProps }: FormFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-semibold text-slate-700 mb-2">
      {label}
    </label>
    <input
      id={name}
      name={name}
      required
      className={`w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${inputClassName}`}
      {...inputProps}
    />
  </div>
);

export default FormField;
