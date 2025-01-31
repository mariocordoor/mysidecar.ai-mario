"use client";
import React from "react";
import { FormInputType } from "@/lib/types";

interface FormInputProps {
  name: string;
  type: FormInputType;
  placeholder: string;
  ref?: React.RefObject<HTMLInputElement | null>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  className,
  ...otherProps
}) => {
  return (
    <input
      {...otherProps}
      className={`${className} border border-primary rounded-md p-2 w-full`}
    />
  );
};
