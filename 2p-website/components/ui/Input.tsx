"use client";

interface InputProps {
  placeholder?: string;
  type?: string;
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
}

export function Input({ placeholder, type = 'text', name, id, required, className = '' }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      required={required}
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300 font-body ${className}`}
    />
  );
}

interface TextareaProps {
  placeholder?: string;
  name?: string;
  id?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export function Textarea({ placeholder, name, id, required, rows = 4, className = '' }: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      name={name}
      id={id}
      required={required}
      rows={rows}
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300 resize-none font-body ${className}`}
    />
  );
}