'use client';

interface CustomInputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  required?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CustomInput({ 
  placeholder, 
  type = 'text', 
  name, 
  required, 
  className = '',
  value,
  onChange
}: CustomInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className={`
        w-full 
        px-4 
        py-3 
        rounded-xl 
        border-2 
        border-gray-200 
        font-body
        text-base
        transition-all 
        duration-200
        focus:outline-none 
        focus:border-opacity-100
        hover:border-gray-300
        ${className}
      `}
      style={{
        borderColor: '#E5E5E5',
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A'
      }}
      onFocus={(e) => {
        e.target.style.borderColor = '#266659';
        e.target.style.boxShadow = '0 0 0 3px rgba(38, 102, 89, 0.1)';
      }}
      onBlur={(e) => {
        e.target.style.borderColor = '#E5E5E5';
        e.target.style.boxShadow = 'none';
      }}
    />
  );
}

interface CustomTextareaProps {
  placeholder?: string;
  name?: string;
  required?: boolean;
  rows?: number;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function CustomTextarea({ 
  placeholder, 
  name, 
  required, 
  rows = 4,
  className = '',
  value,
  onChange
}: CustomTextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      required={required}
      rows={rows}
      value={value}
      onChange={onChange}
      className={`
        w-full 
        px-4 
        py-3 
        rounded-xl 
        border-2 
        border-gray-200 
        font-body
        text-base
        resize-none
        transition-all 
        duration-200
        focus:outline-none 
        focus:border-opacity-100
        hover:border-gray-300
        ${className}
      `}
      style={{
        borderColor: '#E5E5E5',
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A'
      }}
      onFocus={(e) => {
        e.target.style.borderColor = '#266659';
        e.target.style.boxShadow = '0 0 0 3px rgba(38, 102, 89, 0.1)';
      }}
      onBlur={(e) => {
        e.target.style.borderColor = '#E5E5E5';
        e.target.style.boxShadow = 'none';
      }}
    />
  );
}