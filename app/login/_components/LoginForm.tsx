import React, { useRef } from "react";
import { FormInput } from "@/components/ui/FormInput";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/Button";
import { FormInputType } from "@/lib/types";

interface LoginFormProps {
  className?: string;
  handleSubmit: (email: string, name: string) => Promise<void>;
}

const LOGIN_FORM_INPUTS = [
  {
    name: "name",
    type: "text" as FormInputType,
    placeholder: "Name",
    className: "focus:outline-primary",
  },
  {
    name: "email",
    type: "email" as FormInputType,
    placeholder: "Email",
    className: "focus:outline-primary",
  },
];

export const LoginForm: React.FC<LoginFormProps> = ({
  handleSubmit,
  className = "gap-4",
}) => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const userEmailRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = async () => {
    const email = userEmailRef.current?.value;
    const name = userNameRef.current?.value;

    if (!email || !name) {
      toast.warn("Please enter both your email and name.", { autoClose: 3000 });
      return;
    }

    await handleSubmit(email, name);
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await onSubmitHandler();
      }}
      className={`flex flex-col w-full ${className}`}
    >
      {LOGIN_FORM_INPUTS.map((input, index) => (
        <FormInput
          key={`${input.name}-${index}`}
          {...input}
          ref={input.name === "name" ? userNameRef : userEmailRef}
        />
      ))}
      <Button
        variant="primary"
        type="submit"
        value="Log In"
        className="w-full"
      />
    </form>
  );
};
