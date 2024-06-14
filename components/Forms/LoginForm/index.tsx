"use client";

import React, { useCallback, useEffect } from "react";
import loginSchema from "@/validationSchemas/loginSchema";
import { TUserLoginFormRequest } from "@/types/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import { useUserLoginMutation } from "@/lib/apiModules/auth/api";
import FormErrorMessage from "@/components/molecules/FormErrorMessage";
import { useRouter } from "next/navigation";
import { PAGES_ROUTER_PATH_NAMES } from "@/constants/router";

const LoginForm: React.FC = (): React.JSX.Element => {
  const router = useRouter();

  const [userLogin, result] = useUserLoginMutation();

  const { handleSubmit, control } = useForm<TUserLoginFormRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  useEffect(() => {
    if (result.isSuccess) {
      router.replace(PAGES_ROUTER_PATH_NAMES.dashboard);
    }
  }, [result, router]);

  const onSubmit = useCallback(
    (data: TUserLoginFormRequest): void => {
      userLogin(data);
    },
    [userLogin],
  );

  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-12">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <div className="input-group">
          <InputWithValidation
            name="email"
            placeholder="Enter you email address here..."
            id="email"
            control={control}
            withError={true}
          />
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="yourPassword" className="form-label">
          Password
        </label>
        <InputWithValidation
          type="password"
          name="password"
          id="password"
          control={control}
          withError={true}
        />
      </div>
      {result.isError && (
        <div className="mt-1">
          <FormErrorMessage message={result.error.data.message} />
        </div>
      )}
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="remember"
            defaultValue="true"
            id="rememberMe"
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember me
          </label>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
