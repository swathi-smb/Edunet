import React from "react";

const Input = ({ label, onChange, accept, required, className }) => {
  return (
    <div className="grid w-full max-w-xs items-center gap-1.5">
      {label && (
        <label htmlFor="picture" className="text-sm text-gray-400 font-medium leading-none">
          {label}
        </label>
      )}
      <input
        type="file"
        id="picture"
        onChange={onChange}
        accept={accept}
        required={required}
        className={`flex w-full rounded-md border file:py-2 file:px-1 file:rounded-md border-blue-300 bg-white text-sm text-gray-400 file:border-0 file:bg-blue-600 file:text-white file:text-sm file:font-medium ${className}`}
      />
    </div>
  );
};

export default Input;
